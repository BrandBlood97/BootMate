import NavBar from '../components/Nav/NavBar';

export default function ProfilePage() {
        return (
        <section id="profile-page">
            <NavBar />
            <div id="profile-pic">
                <img src="" alt="Profile Picture" />
                <h1>Username</h1>
            </div>
            <div id="profile-info">
                <h2>First Name: </h2>
                <h2>Last Name: </h2>
                <h2>Email: </h2>
                <label htmlFor="work">Looking For Work:</label>
                <input
                    name="work"
                    type="radio"
                    id="work"
                    // onChange={handleChange}
                />
                <label htmlFor="collab">Looking For Collaboration:</label>
                <input
                    name="collab"
                    type="radio"
                    id="collab"
                    // onChange={handleChange}
                />
            </div>
            <div id="current-projects">
                <h2>Current Projects</h2>
                <input type="text" placeholder="Project Name" />
                <button>Add Project</button>
            </div>
            <div id="social-links">
                <img src="" alt="LinkedIn" href=""/>
                <img src="" alt="GitHub" href=""/>
            </div>

        </section>
    );
    }