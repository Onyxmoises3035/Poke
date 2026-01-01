import { RadarChart } from '@mui/x-charts/RadarChart';

const Stats = ({ stats }) => {

    const values = stats.map(stat => stat.value)

    return (
        <RadarChart height={300}
            series={[{
                fillArea: true, data: values
            }]}
            radar={{
                max: 130,
                metrics: ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'],
            }}
        />
    )
}

export default Stats;