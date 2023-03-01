import React, {useState} from "react";
import './list.css';
import ListItem from '../ListItem/ListItem';
import ItemModal from "../ItemModal/ItemModal";

const List = ({todos, changeItemStatus}) => {
    const [itemToShow, setItemToShow] = useState();

    return (
        <div className="table">
            <div className="header">
                <p className="id">id</p>
                <p className="title">Title</p>
                <p className="description">Description</p>
                <p className="status">Status</p>
            </div>
            {todos.map((item) => {
                return <ListItem key={item.id} item={item} onItemClick={setItemToShow} changeStatus={changeItemStatus}/>
            })}
            {itemToShow ? <ItemModal key={itemToShow?.id} setItemToShow={setItemToShow} item={itemToShow}/> : undefined}
        </div>

    )
}

export default List;
