// eslint-disable-next-line react/prop-types
export default function Project({ title, githubName, techUsed, applicationUrl, screenshotName }) {
    return (
        <article className="card">
            <div className="tab">
                <h3>{title} <a href={getGitHubUrl(githubName)}><img src="/assets/images/github-mark-white.png" alt="GitHub Logo" width={25} height={25}/></a>
                </h3>
                <p>{ techUsed }</p>
            </div>
            <a href={applicationUrl}><img src={getScreenshotUrl(screenshotName)} alt={createAltImageText(title)} /></a>
        </article>
    );
}

function getGitHubUrl(name) {
    return `https://www.github.com/mattm479/${name}`;
}

function getScreenshotUrl(name) {
    return `/assets/images/${name}`;
}

function createAltImageText(title) {
    return `Screenshot of ${title}`;
}