import { RadarChart } from '@mui/x-charts/RadarChart';

const Stats = ({ stats }) => {

    const values = stats.map(stat => stat.value)
    const max = Math.max(...values)
    const label = `Stat maximo: ${max}`

    return (
        <RadarChart height={250}
            series={[{
                fillArea: true, data: values, label: label
            }]}
            radar={{
                max: max,
                metrics: ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'],
            }}
        />
    )
}

export default Stats;