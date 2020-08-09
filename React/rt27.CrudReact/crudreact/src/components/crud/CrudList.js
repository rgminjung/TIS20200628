import React, { Component } from "react";
import CrudListItem from "./CrudListItem.js";
class CrudList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rows = this.props.list;
        /*{items.map(function (value, key) {
            return <li key={key}>{value}</li>;
                    })}
                    */
        const trs = rows.map((man, index) => {
            return (
                <CrudListItem
                    man={man}
                    key={man.id}
                    {...this.props}
                ></CrudListItem>
            );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>POWER</th>
                        <th>CRUD</th>
                    </tr>
                </thead>
                <tbody>{trs}</tbody>
            </table>
        );
    }
}

export default CrudList;
