import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { HISTORY_API } from "../../constants/api";

export default function PageList() {
	const [pages, setPages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = HISTORY_API;


	useEffect(function () {
		async function getPage() {
			try {
				const response = await axios.get(url);
				console.log("response", response);
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

	if (loading) return <div>
		<Spinner animation="border" role="status" variant="success">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>;

	if (error) return <div>{}</div>;

	return (
		<div className="pages">
			{pages.map((page) => {
				return (
                    <div className="historical_events">
                        <div class="spaceX_history" key={page.id}>
                            <div class="details">
                                <p class="id">{page.id}</p>
                                <p class="title_">{page.title}</p>
                                <p class="date">{new Date(page.event_date_utc).toUTCString().substr(4,13).replace()}</p>
                                <p class="flight_number">{page.flight_number}</p>
                                <p class="detail">{page.details}</p>
                                <a class="historical_btn" href={page.links.article}>Read more!</a>
                            </div>
                        </div>
                    </div>

				);
			})}
		</div>
	);
}
