import { useEffect, useState } from "react";
import CardBook from "./CardBook";

export default function BookMark() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmark"));
    if (bookmarks) {
      setBookmarks(bookmarks);
    }
  }, [bookmarks]);

  return (
    <>
      <div className="flex flex-col p-8 lg:flex lg:flex-row justify-center lg:flex-wrap w-full gap-3 lg:pt-1">
        {bookmarks.map((el) => (
          <CardBook el={el} />
        ))}
      </div>
    </>
  );
}
