import React from "react"
import { useEffect, useState } from "react"
import { cleanObject } from "../../utils"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name:'',
        personId: ''
    });
    const [list, setList] = useState([])
    const [users, setUsers] = useState([]);

    /* useEffect(()=> {
        fetch(`${apiUrl}/projects`).then(res => {
            if(res.ok){
                res.json().then(data => {
                    setList(data);
                })
            }
        })
    }, [param]) */

    useEffect(()=> {
       const fetchList = async() => {
            const res = await fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`);
            if(res.ok) {
                const list = await res.json();
                setList(list);
            }
       }
       fetchList();
    }, [param])

    /* useEffect(()=> {
        fetch(`${apiUrl}/users`).then(res => {
            if(res.ok){
                res.json().then(data => {
                    setUsers(data);
                })
            }
        })
    }, [param]) */

    useEffect(()=> {
        const fetchUsers = async() => {
            const res = await fetch(`${apiUrl}/users`);
            if(res.ok) {
                const users = await res.json();
                setUsers(users);
            }
        }
        fetchUsers();
    }, [param])

    return <div>
        <SearchPanel param={param} setParam={setParam} users={users} setUsers={setUsers}/>
        <List list={list} users={users}/>
    </div>
}