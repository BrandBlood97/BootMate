import NavBar from "../components/Nav/NavBar";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_STUDENT, QUERY_ME } from "../utils/queries";
import ProfileCard from "../components/Profile/ProfileCard";
import Auth from "../utils/auth";

export default function ProfilePage() {
  const renderProfile = () => {
    const { id: userParams } = useParams();

    const { loading, data } = useQuery(userParams ? QUERY_STUDENT : QUERY_ME, {
      variables: { id: userParams },
    });
    const user = data?.me || data?.student || {};

    if (Auth.loggedIn() && Auth.getProfile().data.id === userParams) {
      return <Navigate to="profile/me" />;
    }
    return (
      <div>
        {loading ? <div>Loading...</div> : <ProfileCard student={user} />}
      </div>
    );
  };

  return (
    <section>
      <NavBar />
      <div>{renderProfile()}</div>
    </section>
  );
}
