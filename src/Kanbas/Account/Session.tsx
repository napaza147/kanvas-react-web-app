import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import axios from "axios";
export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();



const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      console.log(currentUser)
      if (currentUser) {
        dispatch(setCurrentUser(currentUser));

        // Set the "Current-User" header for axios globally
        axios.defaults.headers.common["Current-User"] = JSON.stringify(currentUser);
      } else {
        console.warn("No currentUser received from the server.");
      }
    } catch (err) {
      console.error("Error fetching user profile:", err);
      // Optionally handle logout or redirect to login here
    } finally {
      setPending(false); // Ensure this runs regardless of success or failure
    }
  };




  useEffect(() => {
    fetchProfile();
  }, []);
  if (!pending) {
    return children;
  }
}
