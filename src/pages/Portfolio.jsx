import Project from "../components/Project.jsx";

export default function Portfolio() {
    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className="project-container">
                <Project title={"Personal Blog"} githubName={"my-blog"} techUsed={"HTML, CSS, JS"} applicationUrl={"https://mattm479.github.io/my-blog"} screenshotName={"personal-blog.png"} />
                <Project title={"Task Board"} githubName={"task-board"} techUsed={"HTML, CSS, JS"} applicationUrl={"https://mattm479.github.io/task-board"} screenshotName={"task-board.png"} />
                <Project title={"Employee Tracker"} githubName={"employee-tracker"} techUsed={"Node.js,  PostgreSQL"} applicationUrl={"#"} screenshotName={"employee-tracker.png"} />
                <Project title={"Weather Dashboard"} githubName={"weather-dashboard"} techUsed={"HTML, CSS, JS and API"} applicationUrl={"https://mattm479.github.io/weather-dashboard"} screenshotName={"weather-dashboard.png"} />
                <Project title={"Stock Ticker"} githubName={"stock-ticker"} techUsed={"HTML, CSS, JS and APIs"} applicationUrl={"https://mattm479.github.io/stock-ticker"} screenshotName={"stock-ticker.png"} />
                <Project title={"Note Taker"} githubName={"note-taker"} techUsed={"Node.js, Express"} applicationUrl={"https://mattm479.github.io/note-taker"} screenshotName={"note-taker.png"} />
            </div>
        </div>
    );
}