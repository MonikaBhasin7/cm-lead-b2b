import "./Home.scss";
import MessageListing from "./components/message-listing/MessageListing";

export default function Home() {
  return (
    <div className="root">
      <div className="message-listing">
        <MessageListing />
      </div>
      <div className="user-chat"></div>
    </div>
  );
}
