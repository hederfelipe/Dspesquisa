import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { RecordsResponse } from './types';
import {formatDate } from './helpers';
import Pagination from './Pagination';
import Filters from '../../components/Filters';

const BASE_URL = 'http://localhost:8080' 

const Records =()=>{
        const [ recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
        const [ activePage, setactivePage] = useState(0);


        useEffect(() =>{
        axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`).then(response => setRecordsResponse(response.data));

    }, [activePage]);

    function handlePageChange(index: number) {
        setactivePage(index);
    }

    return (
        <div className ="page-container">    
            <Filters link="/charts" linkText ="VER GRAFICOS" />
            <table className="records-table" cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>INSTANTE</th>
                    <th>NOME</th>
                    <th>IDADE</th>
                    <th>PLATAFORMA</th>
                    <th>GÊNERO</th>
                    <th>TÍTULO DO GAME</th>
                </tr>
            </thead>
            <tbody>

            {recordsResponse?.content.map( records => ( 
             <tr key={records.id}>
                <td>{formatDate (records.moment)}</td>
                <td>{records.name}</td>
                <td>{records.age}</td>
                <td className="text-secondary">{records.gamePlatform}</td>
                <td>{records.genreName}</td>
                <td className="text-primary">{records.gameTitle}</td>
               </tr> 
            ))}
                     
         </tbody>
        </table>
        <Pagination 
        activePage={activePage}
        goToPage={handlePageChange}
        totalPages={recordsResponse?.totalPages}
        />
        </div>
     );
}
export default Records;

