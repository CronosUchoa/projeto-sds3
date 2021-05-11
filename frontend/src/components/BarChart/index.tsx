import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type barSeriesData = {
    name: string;
    data:number[];
}

type barChartData ={
    labels:{
        categories:string[];

    };
    series:barSeriesData[];
}

const BarChart = ()=>{

    const [barchartData, setBarCharData] = useState<barChartData>( {
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []                   
            }
        ]
    })

    useEffect(() => {
        // axios.get(BASE_URL + '/sales/success-by-seller')
        //ou
        axios.get(`${BASE_URL}/sales/success-by-seller`).then((response) => {
            const data = response.data as SaleSuccess[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100.0 * x.deals/x.visited,1));

            setBarCharData(
                {
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% Success",
                            data: mySeries                 
                        }
                    ]
                }
            )

        })
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };


    return(
        <Chart
            options={{...options, xaxis:barchartData.labels}}
            series={barchartData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;