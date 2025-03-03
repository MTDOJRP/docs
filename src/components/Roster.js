import React, { useEffect, useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const Roster = () => {
const [rosterData, setRosterData] = useState({
    dps: [],
});
const staticDpsRoster = [
    { callSign: '1C-01', rank: 'Colonel', status: 'Vacant', role: 'Department Head', startDate: '', fto: '', hours: '' },
    { callSign: '1C-02', rank: 'Lieutenant colonel', status: 'Vacant', role: 'Department Head', startDate: '', fto: '', hours: '' },
    { callSign: '1C-03', rank: 'Major', status: 'Vacant', role: 'Department Management', startDate: '', fto: '', hours: '' },
    { callSign: '1C-04', rank: 'Captain', status: 'Vacant', role: 'Division Supervisor', startDate: '', fto: '', hours: '' },
    { callSign: '1L-05', rank: 'Lieutenant', status: 'Vacant', role: 'LIA Supervisor', startDate: '', fto: '', hours: '' },
    { callSign: '1L-06', rank: 'Lieutenant', status: 'Vacant', role: 'FTO Supervisor', startDate: '', fto: '', hours: '' },
    { callSign: '1S-07', rank: 'Sergeant', status: 'Vacant', role: 'Patrol Supervisor', startDate: '', fto: '', hours: '' },
    { callSign: '1S-08', rank: 'Sergeant', status: 'Vacant', role: 'Shift Supervisor', startDate: '', fto: '', hours: '' },
    { callSign: '1S-09', rank: 'Sergeant', status: 'Vacant', role: 'Shift Supervisor', startDate: '', fto: '', hours: '' },
    { callSign: '1V-10', rank: 'Corporal', status: 'Vacant', role: 'Road Lead', startDate: '', fto: '', hours: '' },
    { callSign: '1V-11', rank: 'Corporal', status: 'Vacant', role: 'Road Lead', startDate: '', fto: '', hours: '' },
    { callSign: '1V-12', rank: 'Corporal', status: 'Vacant', role: 'Road Lead', startDate: '', fto: '', hours: '' },
    { callSign: '1V-13', rank: 'Corporal', status: 'Vacant', role: 'Road Lead', startDate: '', fto: '', hours: '' },
    { callSign: '1V-14', rank: 'Corporal', status: 'Vacant', role: 'Road Lead', startDate: '', fto: '', hours: '' },
    { callSign: '1V-15', rank: 'Corporal', status: 'Vacant', role: 'Road Lead', startDate: '', fto: '', hours: '' },
    { callSign: '1U-16', rank: 'Senior Trooper', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-17', rank: 'Senior Trooper', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-18', rank: 'Senior Trooper', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-19', rank: 'Senior Trooper', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-20', rank: 'Senior Trooper', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-21', rank: 'Trooper 1st Class', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-22', rank: 'Trooper 1st Class', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-23', rank: 'Trooper 1st Class', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-24', rank: 'Trooper 1st Class', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-25', rank: 'Trooper 1st Class', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-26', rank: 'Trooper 2nd Class', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-27', rank: 'Trooper 2nd Class', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-28', rank: 'Trooper 2nd Class', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1U-29', rank: 'Trooper 2nd Class', status: 'Vacant', role: 'Patrol Trooper', startDate: '', fto: '', hours: '' },
    { callSign: '1N-30', rank: 'Probationary Trooper', status: 'Vacant', role: 'Probationary', startDate: '', fto: '', hours: '' },
    { callSign: '1N-31', rank: 'Probationary Trooper', status: 'Vacant', role: 'Probationary', startDate: '', fto: '', hours: '' },
    { callSign: '1N-32', rank: 'Probationary Trooper', status: 'Vacant', role: 'Probationary', startDate: '', fto: '', hours: '' },
];

useEffect(() => {
const fetchRosterData = async () => {
    try {
        const response = await fetch('https://api.kcdojrp.com/v1/roster');
        const data = await response.json();
        const apiRoster = data.response || [];
        const mergeRosters = (staticRoster) => {
            return staticRoster.map(staticEntry => {
            const dynamicEntry = apiRoster.find(entry => entry.callsign === staticEntry.callSign);
            return dynamicEntry
        ? {
            ...staticEntry,
            name: dynamicEntry.name,
            rank: dynamicEntry.rank,
            role: dynamicEntry.position,
            startDate: dynamicEntry.startDate,
            status: dynamicEntry.suspended === "false" ? "Active" : "Suspended",
            hours: dynamicEntry.hours
        }
        : staticEntry;
    });
        };
            setRosterData({
                dps: mergeRosters(staticDpsRoster)
            });
    } catch (error) {
        console.error('Error fetching roster data:', error);
    }
    };
    fetchRosterData();
}, []);

const renderTable = (roster) => (
    <table>
    <thead>
        <tr>
        <th>Call Sign</th>
        <th>Name</th>
        <th>Rank</th>
        <th>Status</th>
        <th>Role/Detail</th>
        <th>Start Date</th>
        <th>FTO</th>
        <th>Hours</th>
        </tr>
    </thead>
    <tbody>
        {roster.map((member, index) => (
        <tr key={index}>
            <td>{member.callSign}</td>
            <td>{member.name || ''}</td>
            <td>{member.rank}</td>
            <td>{member.status}</td>
            <td>{member.role}</td>
            <td>{member.startDate || ''}</td>
            <td>{member.fto || ''}</td>
            <td>{member.hours || ''}</td>
        </tr>
        ))}
    </tbody>
    </table>
);

return (
    <Tabs defaultValue="dps" values={[
    { label: 'Department of Public Safety', value: 'dps' }
    ]}>
    <TabItem value="dps">{renderTable(rosterData.dps)}</TabItem>
    </Tabs>
);
};

export default Roster;
