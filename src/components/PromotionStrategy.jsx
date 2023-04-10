import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';

// import img_1 from "../assets/images/bags/1.jpg";
// import img_2 from "../assets/images/bags/2.jpg";
// import img_3 from "../assets/images/bags/3.jpg";
// import img_4 from "../assets/images/bags/4.jpg";
// import img_5 from "../assets/images/bags/5.jpg";
// import img_6 from "../assets/images/bags/6.jpg";
// import img_7 from "../assets/images/bags/7.jpg";
import {Button} from "@material-ui/core";
import {Textsms} from "@material-ui/icons";

import img_1 from "../assets/images/gadgets/1.png";
import img_2 from "../assets/images/gadgets/2.png";
import img_3 from "../assets/images/gadgets/3.png";
import img_4 from "../assets/images/gadgets/4.png";
import img_5 from "../assets/images/gadgets/5.png";


function PromotionStrategy() {
    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'subject', headerName: 'Subject', width: 200},
        {
            field: 'image',
            headerName: 'Photo',
            flex: 1,
            sortable: false,
            renderCell: (params) => <img src={params.row.img}/>
        },
        // {field: 'lastName', headerName: 'Last name', width: 130},
        // {field: 'age', headerName: 'Age', width: 90, type: 'number'},
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (params) =>
        //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
    ];

    const rows = [
        {id: 1, subject: 'Accessory', img: `${img_1}`},
        {id: 2, subject: 'Accessory', img: `${img_2}`},
        {id: 3, subject: 'Accessory', img: `${img_3}`},
        {id: 4, subject: 'Accessory', img: `${img_4}`},
        {id: 5, subject: 'Accessory', img: `${img_5}`}
        // {id: 6, subject: 'Accessory', img: `${img_6}`},
        // {id: 7, subject: 'Accessory', img: `${img_7}`}
    ];

    const [approveState, setApproveStatee] = React.useState({
        disabled: true,
    });

    const handleSelectionChange = (selectedRows) => {
        setApproveStatee({
            disabled: selectedRows.length === 0
        })
    }

    return (
        <div className="promotion-strategy">
            {/*<Button*/}
            {/*    variant="contained"*/}
            {/*    disabled={approveState.disabled}*/}
            {/*>*/}
            {/*    Submit*/}
            {/*</Button>*/}
            {/*<label className="submit-wrapper" onInput="submit">*/}
            {/*    <input id="submit" type="submit"/>*/}
            {/*    <span>AD_IN_SOCIAL_MEDIA</span>*/}
            {/*</label>*/}
            <DataGrid
                className="wrapper"
                rowHeight={250}
                onCellClick={handleSelectionChange}

                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default PromotionStrategy;