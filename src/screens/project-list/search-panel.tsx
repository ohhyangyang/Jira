import React from "react"
import { useEffect, useState } from "react"

export interface User {
    id: string,
    name: string,
    email: string,
    title: string,
    organization: string
}

interface SearchPanelProps {
    param: {
        name: string, 
        personId : string
    },
    setParam: (param: SearchPanelProps['param']) => void;
    users: User[]
}
export const SearchPanel = ({param, setParam, users}: SearchPanelProps) => {
    
    return <form>
        <div>
            <input type="text" value={param.name} onChange={event => setParam({
                ...param,
                name: event.target.value
            })}/>
            <select value={param.personId} onChange={event => setParam({
                ...param,
                personId: event.target.value
            })}>
                <option value={''}>Person in charge</option>
                {
                    users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}