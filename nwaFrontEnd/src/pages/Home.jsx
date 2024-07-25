import React from "react";
import StudentList from '../components/Student/StudentList'
import Formulario from "../components/Student/Form/formulario";

const Home = () => {
    return (

        <div className="flex">
            <main className="flex-1 p-4">
                <StudentList />
            </main>
            <Formulario />
        </div>
    )
}

export default Home