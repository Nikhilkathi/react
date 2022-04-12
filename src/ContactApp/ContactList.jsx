import React from "react";
class ContactList extends React.Component{
    render(){
        let { contacts }= this.props
        return (<div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1>Contact List</h1>
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>email</th>
                                    <th>gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map()
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactList