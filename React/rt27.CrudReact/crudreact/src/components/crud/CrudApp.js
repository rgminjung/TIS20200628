import React, { Component } from "react";
import CrudInput from "./CrudInput.js";
import CrudList from "./CrudList.js";
class CrudApp extends Component {
    state = {
        list: [
            { id: 1, name: "슈퍼맨", power: 100 },
            { id: 2, name: "아쿠아맨", power: 300 },
            { id: 3, name: "스파이더맨", power: 500 },
            { id: 4, name: "배트맨", power: 30 },
        ],
    };
    constructor(props) {
        super(props);
        //this bind
        this.insert = this.insert.bind(this);
        this.doUp = this.doUp.bind(this);
        this.doDown = this.doDown.bind(this);
        this.doDel = this.doDel.bind(this);
        this.doEdit = this.doEdit.bind(this);
    }
    insert(user) {
        //이벤트 콜백 this bind
        //this.state.list에 추가

        var maxObj = this.state.list.reduce(function (prev, next) {
            return prev.id > next.id ? prev : next;
        });
        console.log(maxObj);

        if (maxObj) {
            // user 객체 id 프러퍼티와 값 추가
            // user = {name:?, power: ? }
            user.id = maxObj.id + 1; // {eid:?, name:?, power: ? }
        } else {
            user.id = 1;
        }

        //신규 리스트 생성 ...this.state.list 기존 리스트 총row
        const listCopy = [...this.state.list, user];
        this.setState({
            list: listCopy,
        });
    }
    doUp(userid) {
        var users = this.state.list.map(function (man) {
            if (man.id == userid) {
                man.power = Number(man.power) + 100;
            }
            return man;
        }, userid);
        //console.log(users); // users == 배열, user== 객체
        this.setState({
            list: users,
        });
    }
    doDown(userid) {
        var users = this.state.list.map(function (man) {
            if (man.id == userid) {
                man.power = Number(man.power) - 50;
            }
            return man;
        }, userid);
        //console.log(users); // users == 배열, user== 객체
        this.setState({
            list: users,
        });
    }
    doDel(userid) {
        //배열에서 삭제
        let r = window.confirm("삭제하시겠습니까?");
        if (r) {
            let listCopy = this.state.list.filter(function (man, index) {
                return man.id !== userid ? true : false;
            });
            this.setState({
                list: listCopy,
            });
        }
    }
    doEdit(user) {
        //this.$data.user = this.$data.list[index];
        //debugger;
        let listCopy = this.state.list.map(function (man, index) {
            if (man.id === user.id) {
                return user;
            } else {
                return man;
            }
        });
        this.setState({
            list: listCopy,
        });
    }

    render() {
        return (
            <div>
                <CrudInput insert={this.insert}></CrudInput>
                <CrudList
                    {...this.state}
                    doUp={this.doUp}
                    doDown={this.doDown}
                    doEdit={this.doEdit}
                    doDel={this.doDel}
                ></CrudList>
            </div>
        );
    }
}
export default CrudApp;
