'use client';

import DataTable from 'react-data-table-component';
import DataGrid from 'react-data-grid';
import 'react-data-grid/lib/styles.css';

const columns2 = [
	{key: 'idgroup', name: 'ID'},
	{key: 'eng_name', name: 'Nombre'}
];

const data2 = [
  	{idgroup: 1, eng_name: 'Beetlejuice'},
	{idgroup: 2, eng_name: 'Ghostbusters'}
];
const columns = [
	{
		name: 'Title',
		selector: row => row.title,
	},
	{
		name: 'Year',
		selector: row => row.year,
	},
];

const data = [
  	{
		id: 1,
		title: 'Beetlejuice',
		year: '1988',
	},
	{
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
	},
]

export default function Prueba2() {
	return (
        <>
        <h1>Datatable</h1>
		<DataTable
			columns={columns}
			data={[]}
		/>
        <h1>Datagrid</h1>
        <DataGrid columns={columns2} rows={data2} />
        </>
    );
}