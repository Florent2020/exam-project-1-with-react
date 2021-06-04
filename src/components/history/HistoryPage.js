import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import PageList from "./PageList";

function History() {
    return (
            <>
                <Container>
                    <div id="main_history">
                        <Heading content="All Historical SpaceX Events" />
                        <div class="spaceX">
                            <div class="title">
                                <p class="id">No:</p>
                                <p class="title_">Title:</p>
                                <p class="date">Event date:</p>
                                <p class="flight_number">Flight no:</p>
                                <p class="detail">Details:</p>
                                <p class="btn btn-link">Links:</p>
                            </div>
                            <PageList />
                        </div>

                    </div>

                </Container>
            </>

    );
}

export default History;