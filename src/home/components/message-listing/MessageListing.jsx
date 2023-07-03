import { useEffect, useState } from "react";
import { getCall } from "../../../global/network";
import "./MessageListing.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { ReactComponent as ProfileImage } from "../../../assets/svg/profile.svg";

export default function MessageListing() {
  let [userListing, setUserListingData] = useState([]);
  useEffect(() => {
    if (userListing.length === 0) {
      getUserListing().then((response) => {
        console.log("MessageListing - response", response);
        setUserListingData(response.data);
      });
    }
  }, [userListing]);

  return (
    <div className="messageRoot">
      <div className="headingRow">
        <div className="messageText">Messages</div>
        <div style={{ fontSize: 36 }}>
          <AiOutlineEdit />
        </div>
      </div>

      <br />
      <input type="text" placeholder="Search" />
      <br />
      <br />
      <div>
        {userListing.map((item: UserData) => {
          return <MessageRow user={item} />;
        })}
      </div>
    </div>
  );
}

export function MessageRow(props) {
  const user: UserData = props.user;
  return (
    <div>
      <div className="userRow">
        <div style={{ marginRight: 16 }}>
          <ProfileImage />
        </div>

        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <span className="userName">{user.user_name}</span>
          <span className="lastMessage" style={{ paddingTop: 6 }}>
            {user.last_message}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            marginLeft: 16,
          }}
        >
          <span className="lastMessageTime" style={{ paddingTop: 8 }}>
            {user.last_message_time}
          </span>
          <div className="unreadMessages" style={{ marginTop: 16 }}>
            {user.unread_messages}
          </div>
        </div>
      </div>
      <hr className="solid" />
    </div>
  );
}

async function getUserListing() {
  return await getCall("http://localhost:8080/UserListing");
}

interface UserData {
  user_name: string;
  user_photo: string;
  last_message: string;
  unread_messages: number;
  last_message_time: number;
  is_online: boolean;
}
