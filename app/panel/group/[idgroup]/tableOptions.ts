// Options used by react-table-data-component from page.tsx

// Declares array columns that defines what columns will be rendered and data associated to each one
export const columns = [
	{
		name: 'id',
        width: '2',
		// row maybe marked as error because is not type defined. It's ok, should work without any issues
		selector: row => row.idfood,
	},
	{
		name: 'Nombre',
		selector: row => row.eng_name,
        sortable: true,
	},
    {
        name: 'Nombre científico',
        selector: row => row.sci_name,
    },
];

// Pagination options
export const paginationOptions ={
    rowsPerPageText: "Resultados por página",
    rangeSeparatorText: 'de',
	selectAllRowsItem: true,
	selectAllRowsItemText: 'Todos',
};
