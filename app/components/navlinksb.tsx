'use client';

import { useEffect, useState } from "react";
import { getGroupsServer } from "../lib/data";

interface infoGroup{
    idgroup: number;
    name: string|null;
}

export default function NavLinks2() {
    const [groups, setGroups] = useState<infoGroup[]>([]);

    useEffect(()=>{
        async function getGroups(){
            const data=await getGroupsServer();
            setGroups(data);
        }
        getGroups();
    },[]);
    
    return (
        <div>
            <ul>
                {
                    groups.map( group => (
                        <li key={group.idgroup}>{group.name}</li>
                    ))
                }
            </ul>
        </div>

    );
}