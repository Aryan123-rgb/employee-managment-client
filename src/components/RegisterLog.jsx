import React from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function RegisterLog() {
  const attendanceRecord = [
    {
      date: "31 September",
      day: "Tuesday",
      status: "present",
    },
    {
      date: "31 September",
      day: "Tuesday",
      status: "present",
    },
    {
      date: "31 September",
      day: "Tuesday",
      status: "present",
    },
    {
      date: "31 September",
      day: "Tuesday",
      status: "present",
    },
    {
      date: "31 September",
      day: "Tuesday",
      status: "present",
    },
    {
      date: "31 September",
      day: "Tuesday",
      status: "present",
    },
    {
      date: "31 September",
      day: "Tuesday",
      status: "present",
    },
    {
      date: "31 September",
      day: "Tuesday",
      status: "present",
    },
    {
      date: "31 September",
      day: "Tuesday",
      status: "present",
    },
    {
      date: "31 September",
      day: "Tuesday",
      status: "present",
    },
  ];

  return (
    <div
      style={{ marginRight: "40px", maxHeight: "400px", overflow: "scroll" }}
    >
      <TableContainer
        component={Paper}
        sx={{ border: "1px solid black"  }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Day</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceRecord.map((u) => (
              <TableRow key={u.day}>
                <TableCell>1.</TableCell>
                <TableCell>31 September</TableCell>
                <TableCell>Tuesday</TableCell>
                <TableCell>Present</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RegisterLog;
