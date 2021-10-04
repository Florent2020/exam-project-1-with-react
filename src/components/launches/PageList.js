import { useState, useEffect } from "react";
import axios from "axios";
import { LAUNCHES_API } from "../../constants/api";
import Loader from "../layout/Loader";
import ErrorMessage from "../layout/ErrorMessage";

export default function PageList() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = LAUNCHES_API;

  useEffect(function () {
    async function getPage() {
      try {
        const response = await axios.get(url);
        // console.log("response", response);
        setPages(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={`Error: ${error}`} />;

  return (
    <div className="pages">
      {pages.map((page) => {
        return (
          <div className="spaceX_launches" key={page.mission_name}>
            <div className="details">
              <p className="flight_number">{page.flight_number}</p>
              <p className="rocket_name">{page.rocket.rocket_name}</p>
              <p className="launche_date">
                {new Date(page.launch_date_utc)
                  .toUTCString()
                  .substr(4, 13)
                  .replace()}
              </p>
              <p className="mission_name">{page.mission_name}</p>
              <p className="detail">{page.details}</p>
              <a className="btn btn-link" href={page.links.video_link}>
                You Tube!
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
