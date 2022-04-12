import React from "react";
class ContactList extends React.Component{
    render(){
        return <div>
            <div className="container mt-5">
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default ContactList