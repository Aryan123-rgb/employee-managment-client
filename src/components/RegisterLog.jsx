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
import { useSelector } from "react-redux";

function RegisterLog() {
  const { attendanceRecord } = useSelector((state) => state.userReducer);

  return (
    <div
      style={{ marginRight: "40px", maxHeight: "400px", overflow: "scroll" }}
    >
      <TableContainer component={Paper} sx={{ border: "1px solid black" }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceRecord?.map((u,index) => (
              <TableRow key={u.day}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{u.date}</TableCell>
                <TableCell>{u.time}</TableCell>
                <TableCell
                  sx={{
                    color: "green",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                  }}
                >
                  PRESENT
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RegisterLog;
