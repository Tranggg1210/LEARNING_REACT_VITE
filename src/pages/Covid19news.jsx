import useFetch from "../customize/fetch";
const Covid19news = () => {
    const dataCovid = useFetch('https://api.covidtracking.com/v1/us/daily.json')
    return (
        <div className='covid19News'>
            <div>
                <h1>BẢNG TIN COVID-19</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Date</td>
                            <td>Pending</td>
                            <td>Death</td>
                            <td>Positive</td>
                            <td>Negative</td>
                        </tr>
                        {
                            dataCovid.isLoading === false && dataCovid.isError === false &&
                            dataCovid.data.slice(0, 10).map((item) => (
                                <tr key={item.date}>
                                    <td>{item.dateChecked.slice(0, 10).split("-").reverse().join("-")}</td>
                                    <td>{item.pending}</td>
                                    <td>{item.death}</td>
                                    <td>{item.positive}</td>
                                    <td>{item.negative}</td>
                                </tr>
                            ))
                        }
                        {
                            dataCovid.isLoading &&
                            <tr>
                                <td colSpan={5}>Loading...</td>
                            </tr>
                        }
                        {
                            dataCovid.isError &&
                            <tr>
                                <td colSpan={5}>Something wrong...</td>
                            </tr>
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Covid19news;