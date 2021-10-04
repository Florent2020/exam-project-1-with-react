import { useState, useEffect } from "react";
import axios from "axios";
import { ABOUT_API } from "../../constants/api";
import Loader from "../layout/Loader";
import ErrorMessage from "../layout/ErrorMessage";

export default function AboutList() {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = ABOUT_API;

  useEffect(function () {
    async function getPage() {
      try {
        const response = await axios.get(url);
        // console.log("response", response);
        setAbout(response.data);
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
    <div className="company_info" key={about.founded}>
      <p className="founder">{about.founder}</p>
      <p className="founded">{about.founded}</p>
      <p className="employees">{about.employees}</p>
      <p className="launch_sites">{about.launch_sites}</p>
      <p className="address">{about.headquarters.address}</p>
      <p className="city">{about.headquarters.city}</p>
      <p className="state">{about.headquarters.state}</p>
      <p className="summary">{about.summary}</p>
    </div>
  );
}
