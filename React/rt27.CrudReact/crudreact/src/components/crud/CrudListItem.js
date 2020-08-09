import React, { Component } from "react";
class CrudListItem extends Component {
    state = {
        isEditMode: false,
    };
    constructor(props) {
        super(props);

        //this bind
        this.doUp = this.doUp.bind(this);
        this.doDown = this.doDown.bind(this);
        this.doDel = this.doDel.bind(this);
        this.doEdit = this.doEdit.bind(this);
        this.doSave = this.doSave.bind(this);

        //ref만들기
        this.refUserName = React.createRef();
        this.refUserPower = React.createRef();
    }
    doUp() {
        const id = this.props.man.id;
        this.props.doUp(id); //curdapp에 있는 doUp호출
    }
    doDown() {
        const id = this.props.man.id;
        this.props.doDown(id); //curdapp에 있는 doUp호출
    }
    doDel() {
        const id = this.props.man.id;
        this.props.doDel(id); //curdapp에 있는 doUp호출
    }
    doEdit() {
        this.setState((prevState, prop) => {
            return {
                isEditMode: !prevState.isEditMode,
            };
        });
    }
    doSave() {
        //isEditMode 바꾸기
        this.setState((prevState, prop) => {
            return {
                isEditMode: !prevState.isEditMode,
            };
        });

        //수정값 던지기
        const id = this.props.man.id;
        const name = this.refUserName.current.value;
        const power = Number(this.refUserPower.current.value);
        const newMan = {
            id: id,
            name: name,
            power: power,
        };

        this.props.doEdit(newMan); //crudApp의 doEdit호출
    }
    render() {
        const { id, name, power } = this.props.man;

        const formView = (
            <tr className="" key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{power}</td>
                <td>
                    <button onClick={this.doDel}>Del</button>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doEdit}>Edit</button>
                </td>
            </tr>
        );

        const formEdit = (
            <tr className="" key={id}>
                <td>{id}</td>
                <td>
                    <input
                        type="text"
                        name="name"
                        ref={this.refUserName}
                        defaultValue={name}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="power"
                        ref={this.refUserPower}
                        defaultValue={power}
                    />
                </td>
                <td>
                    <button>Del</button>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doSave}>Save</button>
                </td>
            </tr>
        );
        if (this.state.isEditMode) {
            return formEdit;
        } else {
            return formView;
        }
    }
}

export default CrudListItem;
