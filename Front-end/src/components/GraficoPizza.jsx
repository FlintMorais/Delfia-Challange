// src/components/BarChart.jsx
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Registre os componentes do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export const GraficoPizza = () => {
    const data = {
        labels: ['Pastel de Angu', 'Pão de Queijo - Tradicional', 'Bolinho fit de Frango'],
        datasets: [
            {
                label: 'Vendas',
                data: [90, 75, 80],
                backgroundColor: ['#153d64', '#1587b8', '#62c2eb'],
            },
            
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Produtos Mais Vendidos',
            },
        },
    };

    return <Pie data={data} options={options} />;
};
