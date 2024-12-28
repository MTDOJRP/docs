import React, { useEffect, useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const FireRoster = () => {
const [rosterData, setRosterData] = useState({
    safd: [],
});
const staticSahpRoster = [
    { callSign: '90-01', rank: 'Chief', status: 'Vacant', role: 'Department Head', startDate: '', fto: '', hours: '' },
    { callSign: '90-02', rank: 'Asst. Chief', status: 'Vacant', role: 'Department Head', startDate: '', fto: '', hours: '' },
    { callSign: '90-03', rank: 'Battalion Chief', status: 'Vacant', role: 'Department Management', startDate: '', fto: '', hours: '' },
    { callSign: '90-04', rank: 'Fire Marshall', status: 'Vacant', role: 'Fire Marshall', startDate: '', fto: '', hours: '' },
    { callSign: '90-05', rank: 'Captain', status: 'Vacant', role: 'Division Supervisor', startDate: '', fto: '', hours: '' },
    { callSign: '90-06', rank: 'Lieutenant', status: 'Vacant', role: 'Shift Supervisor', startDate: '', fto: '', hours: '' },
    { callSign: '90-07', rank: 'Lieutenant', status: 'Vacant', role: 'Shift Supervisor', startDate: '', fto: '', hours: '' },
    { callSign: '90-08', rank: 'Lieutenant', status: 'Vacant', role: 'Shift Supervisor', startDate: '', fto: '', hours: '' },
    { callSign: '90-09', rank: 'Lieutenant', status: 'Vacant', role: 'Shift Supervisor', startDate: '', fto: '', hours: '' },
    { callSign: '90-10', rank: 'Engineer', status: 'Vacant', role: 'Engineer', startDate: '', fto: '', hours: '' },
    { callSign: '90-11', rank: 'Engineer', status: 'Vacant', role: 'Engineer', startDate: '', fto: '', hours: '' },
    { callSign: '90-12', rank: 'Engineer', status: 'Vacant', role: 'Engineer', startDate: '', fto: '', hours: '' },
    { callSign: '90-13', rank: 'Engineer', status: 'Vacant', role: 'Engineer', startDate: '', fto: '', hours: '' },
    { callSign: '90-14', rank: 'Engineer', status: 'Vacant', role: 'Engineer', startDate: '', fto: '', hours: '' },
    { callSign: '90-15', rank: 'Engineer', status: 'Vacant', role: 'Engineer', startDate: '', fto: '', hours: '' },
    { callSign: '90-16', rank: 'Paramedic', status: 'Vacant', role: 'Lead Medical', startDate: '', fto: '', hours: '' },
    { callSign: '90-17', rank: 'Paramedic', status: 'Vacant', role: 'Lead Medical', startDate: '', fto: '', hours: '' },
    { callSign: '90-18', rank: 'Paramedic', status: 'Vacant', role: 'Lead Medical', startDate: '', fto: '', hours: '' },
    { callSign: '90-19', rank: 'Paramedic', status: 'Vacant', role: 'Lead Medical', startDate: '', fto: '', hours: '' },
    { callSign: '90-20', rank: 'Paramedic', status: 'Vacant', role: 'Lead Medical', startDate: '', fto: '', hours: '' },
    { callSign: '90-21', rank: 'Firefighter', status: 'Vacant', role: 'Firefighter', startDate: '', fto: '', hours: '' },
    { callSign: '90-22', rank: 'Firefighter', status: 'Vacant', role: 'Firefighter', startDate: '', fto: '', hours: '' },
    { callSign: '90-23', rank: 'Firefighter', status: 'Vacant', role: 'Firefighter', startDate: '', fto: '', hours: '' },
    { callSign: '90-24', rank: 'Firefighter', status: 'Vacant', role: 'Firefighter', startDate: '', fto: '', hours: '' },
    { callSign: '90-25', rank: 'Firefighter', status: 'Vacant', role: 'Firefighter', startDate: '', fto: '', hours: '' },
    { callSign: '90-26', rank: 'EMT', status: 'Vacant', role: 'Medical', startDate: '', fto: '', hours: '' },
    { callSign: '90-27', rank: 'EMT', status: 'Vacant', role: 'Medical', startDate: '', fto: '', hours: '' },
    { callSign: '90-28', rank: 'EMT', status: 'Vacant', role: 'Medical', startDate: '', fto: '', hours: '' },
    { callSign: '90-29', rank: 'EMT', status: 'Vacant', role: 'Medical', startDate: '', fto: '', hours: '' },
    { callSign: '90-30', rank: 'Probationary Firefighter', status: 'Vacant', role: 'Probationary', startDate: '', fto: '', hours: '' },
    { callSign: '90-31', rank: 'Probationary Firefighter', status: 'Vacant', role: 'Probationary', startDate: '', fto: '', hours: '' },
    { callSign: '90-32', rank: 'Probationary Firefighter', status: 'Vacant', role: 'Probationary', startDate: '', fto: '', hours: '' },
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
            safd: mergeRosters(staticSahpRoster),
            });
    } catch (error) {
        console.error('Error fetching roster data:', error);
    }
    };
    fetchRosterData();
}, []);

const renderTable = (FireRoster) => (
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
        {FireRoster.map((member, index) => (
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
    <Tabs defaultValue="safd" values={[
    { label: 'San Andres Fire Department', value: 'safd' },
    ]}>
    <TabItem value="safd">{renderTable(rosterData.safd)}</TabItem>
    </Tabs>
);
};

export default FireRoster;
