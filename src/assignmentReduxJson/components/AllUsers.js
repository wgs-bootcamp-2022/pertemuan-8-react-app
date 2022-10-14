/** @format */

import React, { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TableContainer,
  Paper,
  CssBaseline,
  Container,
} from "@material-ui/core";

function AllUsers() {

  const [users, fetchUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/post")
      .then((res) => res.json())
      .then((res) => {
        fetchUsers(res);
        console.log(res);
      });
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container> <br />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                {/* <TableCell align="right">Expertise</TableCell> */}
                <TableCell align="right">Education</TableCell>
                <TableCell align="right">Technologi</TableCell>
                <TableCell align="right">Note</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="right">{row.firstName}</TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                  {/* <TableCell align="right">{row.expertise}</TableCell> */}
                  <TableCell align="right">{row.education}</TableCell>
                  <TableCell align="right">{row.technology}</TableCell>
                  <TableCell align="right">{row.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
}

export default AllUsers;
