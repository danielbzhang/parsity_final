import React, { useMemo, useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import printJS from 'print-js';
// import { Table, Button } from 'react-bootstrap';
import Nav from './Nav';
import { getPlayers, deleteTableRow } from '../actions';

// +++++++++++++
import ReactTable from './ReactTable';
// +++++++++++++

const AllPlayers = () => {
  const dispatch = useDispatch();
  const tourId = useSelector((state) => state.rootReducer.tourOne._id);

  useEffect(() => {
    dispatch(getPlayers(tourId));
  }, [tourId]);

  const handleDeleteTableRow = (id1, id2) => {
    dispatch(deleteTableRow(id1, id2));
  };

  const allPlayers = useSelector((state) => state.rootReducer.tourOne.players);

  const capFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderPlayers = () => {
    return allPlayers.map((player) => {
      return (
        <tr key={player._id}>
          <td>{capFirstLetter(player.firstname)}</td>
          <td>{capFirstLetter(player.lastname)}</td>
          <td>{player.sex.toUpperCase()}</td>
          <td>
            {'(' +
              player.phone.slice(0, 3) +
              ')' +
              ' ' +
              player.phone.slice(3, 6) +
              '-' +
              player.phone.slice(6, 10)}
          </td>
          <td>{player.email}</td>
          <td>
            <span
              className='table-icon'
              onClick={() => handleDeleteTableRow(tourId, player._id)}
            >
              <i className='fas fa-trash' />
            </span>
          </td>
        </tr>
      );
    });
  };

  const printForm = () => {
    printJS({
      printable: 'player-table',
      type: 'html',
      targetStyles: ['*'],
    });
  };

  // return (
  //   <>
  //     <Nav />
  //     <div className='player-list-btn'>
  //       <div className='player-home-page'>
  //         <Link to='/api/main'>Home</Link>
  //       </div>

  //       <div className='player-list-schedule'>
  //         <Link to='/tours/:id/result'>Schedule</Link>
  //       </div>

  //       <div className='player-list-back'>
  //         <Link to='/tours/:id/players'>Back</Link>
  //       </div>
  //     </div>
  //     <div className='player-table'>
  //       <button
  //         className='table-print'
  //         type='button'
  //         onClick={() => printForm()}
  //       >
  //         Print
  //       </button>
  //       <Table id='player-table' striped bordered hover>
  //         <thead>
  //           <tr>
  //             <th>First Name</th>
  //             <th>Last Name</th>
  //             <th>Gender</th>
  //             <th>Phone Number</th>
  //             <th>Email Address</th>
  //             <th>Option</th>
  //           </tr>
  //         </thead>
  //         <tbody>{renderPlayers()}</tbody>
  //       </Table>
  //     </div>
  //   </>
  // );

  // ++++++++++++++++++++++++++++React Table Below+++++++++++++++++++++++++
  // app.js

  // const Gender = ({ values }) => {
  //   return (
  //     <>
  //       {values.map((g, i) => {
  //         return (
  //           <span key={i} className='badge'>
  //             {g}
  //           </span>
  //         );
  //       })}
  //     </>
  //   );
  // };

  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'firstname',
        Cell: ({ value }) => {
          return capFirstLetter(value);
        },
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'lastname',
        Cell: ({ value }) => {
          return capFirstLetter(value);
        },
      },
      {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'sex',
        Cell: ({ value }) => {
          return value.toUpperCase();
        },
      },
      {
        Header: 'Phone Number',
        Footer: 'Phone Number',
        accessor: 'phone',
        Cell: ({ value }) => {
          return (
            '(' +
            value.slice(0, 3) +
            ')' +
            ' ' +
            value.slice(3, 6) +
            '-' +
            value.slice(6, 10)
          );
        },
      },
      {
        Header: 'Email Address',
        Footer: 'Email Address',
        accessor: 'email',
      },
    ],
    []
  );

  return (
    <>
      <div className='player-home-page'>
        <Link to='/api/main'>Home</Link>
      </div>
      <div>
        <ReactTable columns={columns} data={allPlayers} />
      </div>
    </>
  );
};

export default AllPlayers;
