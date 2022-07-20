import Chart from "../Chart/Chart";

const ExpensesChart = props => {
    // // Chart dataPoints
    const chartDataPoints = [
        { label: 'Jan', value: 330 },
        { label: 'Feb', value: 330 },
        { label: 'Mar', value: 330 },
        { label: 'Apr', value: 330 },
        { label: 'May', value: 330 },
        { label: 'Jun', value: 330 },
        { label: 'Jul', value: 330 },
        { label: 'Aug', value: 330 },
        { label: 'Sep', value: 330 },
        { label: 'Oct', value: 330 },
        { label: 'Nov', value: 330 },
        { label: 'Dec', value: 330 }
    ]
    // filteredExpenses.forEach(element => {
    //     const dataMonth = element.date.getMonth()
    //     chartDataPoints[dataMonth].value += element.amount
    //     console.log('test', chartDataPoints[dataMonth].value)
    // });

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // starting at 0
        chartDataPoints[expenseMonth].value += expense.amount
    }
    return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;