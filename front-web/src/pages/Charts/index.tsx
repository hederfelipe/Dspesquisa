import React from  'react';
import Filter from '../../components/Filters';
import  './styles.css';

const  Charts= () => {
return (
    <div className="page-container">
        <Filter link="/records" linkText="VER TABELA"/>
        <div className="chart-container">
            <div className = "top-related">
                <h1 className="top-related-title">
                    Jogos mais votados
                </h1>
            </div>
        </div>
    </div>
)

};
export default Charts;