import React from 'react'
import Header from '../other/Header.jsx'
import TaskListNumber from'../other/TaskListNumber.jsx'
import TaskList from '../TaskList/TaskList.jsx'
const EmployeeDashboard = ({data}) => {
    if (!data) return null;
    return(
        <>
        <div className = 'px-10 bg-[#1C1C1C] h-screen'>

        <Header  data = {data}/>
        <TaskListNumber data = {data} />
        <TaskList data = {data} />

        </div>
        </>
    )
}

export default EmployeeDashboard