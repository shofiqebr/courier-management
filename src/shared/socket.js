// socket.js
import { io } from "socket.io-client";

const socket = io("https://courier-management-back.onrender.com", {
  withCredentials: true,
});

export default socket;
