import React from "react";
import StudentList from '../components/Student/StudentList'


const Home = () => {
    return (
        <div className="flex">
            <main className="flex-1 p-4">
                <StudentList />
            </main>
        </div>
    )
}

export default Home