import NavBar from "../components/Nav/NavBar";
// import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_STUDENT } from "../utils/queries";
import ProfileCard from "../components/Profile/ProfileCard";
import { useParams } from "react-router-dom";
// import Auth from "../utils/auth";

export default function ProfilePage() {
  const renderProfile = () => {
    const { studentId } = useParams();

    const { loading, data } = useQuery(QUERY_STUDENT, {
      variables: { id: studentId },    
    });

    const student = data?.student|| {};
    console.log(student);

    // if (Auth.loggedIn() && Auth.getProfile().data.id === userParams) {
    //   return <Navigate to="/me" />;
    // }
    return (
      <div>
        {loading ? <div>Loading...</div> : <ProfileCard id={student} />}
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
