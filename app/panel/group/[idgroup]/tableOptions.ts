export const columns = [
	{
		name: 'id',
        width: '2',
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

export const paginationOptions ={
    rowsPerPageText: "Resultados por página",
    rangeSeparatorText: 'de',
	selectAllRowsItem: true,
	selectAllRowsItemText: 'Todos',
};
