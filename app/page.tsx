import ExploreBtn from "@/components/explorebtn";
import EventCard from "@/components/EventCard";
import {IEvent} from "@/database";

export const instant = false;

const BASE_URL = process.env.BASE_URL;

const Page = async () => {
    const response = await fetch(`${BASE_URL}/api/events`, {
        next: { revalidate: 3600 }
    });
    const { events } = await response.json();

    return (
        <section>
            <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

            <ExploreBtn />

            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {events && events.length > 0 && events.map((event: IEvent) => (
                        <li key={event.title} className="list-none">
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Page;