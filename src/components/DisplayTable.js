import React from 'react'

class DisplayTable extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    
    callAPI(){
        fetch()
    }

    render(){
        let tb_data = this.state.list.map((item) =>{
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.gallons}</td>
                    <td>{item.address}</td>
                    <td>{item.date}</td>
                    <td>{item.price}</td>
                    <td>{item.amountdue}</td>
                </tr> 
            )
        })
        return(
            <div className='container'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Gallons</th>
                            <th>Delivery Address</th>
                            <th>Delivery Date</th>
                            <th>Suggested Price</th>
                            <th>Amount Due</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>20</td>
                            <td>123 Commons Street</td>
                            <td>May 26 2027</td>
                            <td>$500</td>
                            <td>$496</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default DisplayTable;