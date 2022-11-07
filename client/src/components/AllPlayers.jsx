import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTable from './ReactTable';
import { useNavigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from './Logout';
import { getPlayers, deleteTableRow } from '../actions';

const AllPlayers = () => {
  const dispatch = useDispatch();
  const tourId = useSelector((state) => state.rootReducer.tourOne._id);

  useEffect(() => {
    dispatch(getPlayers(tourId));
  }, [tourId]);

  const navigate = useNavigate();

  const handleDeleteTableRow = (id1, id2) => {
    dispatch(deleteTableRow(id1, id2));
  };

  const allPlayers = useSelector((state) => state.rootReducer.tourOne.players);

  const capFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstname',
        Cell: ({ value }) => {
          return capFirstLetter(value);
        },
      },
      {
        Header: 'Last Name',
        accessor: 'lastname',
        Cell: ({ value }) => {
          return capFirstLetter(value);
        },
      },
      {
        Header: 'Gender',
        accessor: 'sex',
        Cell: ({ value }) => {
          return value.toUpperCase();
        },
      },
      {
        Header: 'Phone Number',
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
        accessor: 'email',
      },
      {
        Header: 'Option',
        id: 'delete',
        accessor: (str) => 'delete',

        Cell: (tableProps) => (
          <span
            style={{
              cursor: 'pointer',
              color: 'red',
            }}
            onClick={() =>
              handleDeleteTableRow(tourId, tableProps.row.original._id)
            }
          >
            <FiTrash2 />
          </span>
        ),
      },
    ],
    [allPlayers]
  );
  return (
    <>
      <div className='player-home-page'>
        <Navbar bg='light' variant='light'>
          <Container>
            <Nav className='me-auto'>
              <Nav.Link onClick={() => navigate('/api/main')}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/tours/:id/allplayers/data')}>
                Data
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/tours/:id/result')}>
                Schedule
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/tours/:id/players')}>
                Back
              </Nav.Link>
            </Nav>
            <Logout />
          </Container>
        </Navbar>
      </div>
      <div>
        <ReactTable columns={columns} data={allPlayers} />
      </div>
    </>
  );
};

export default AllPlayers;
