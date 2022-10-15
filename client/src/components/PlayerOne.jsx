const PlayerOne = ({ player }) => {
  return (
    <>
      <tr>
        <td>{player.firstname}</td>
        <td>{player.lastname}</td>
        <td>{player.sex}</td>
        <td>{player.phone}</td>
        <td>{player.email}</td>
      </tr>
    </>
  );
};

export default PlayerOne;
