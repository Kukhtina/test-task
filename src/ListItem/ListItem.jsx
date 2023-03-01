import React, {useCallback} from "react";
import './listItem.css';

function ListItem({item, onItemClick, changeStatus}) {
    const handleChangeStatus = useCallback((e) => {
        e.stopPropagation();

        changeStatus(item.id, e.target.checked);
    }, [changeStatus, item.id]);


    return (
        <div className="items-container" onClick={() => onItemClick(item)}>
            <p className="id">{item.id}</p>
            <p className="title">{item.title}</p>
            <p className="description">{item.description}</p>
            <div className="checkbox-container" onClick={(e) => e.stopPropagation()}>
                <input type="checkbox" checked={item.checked} onChange={handleChangeStatus}/>
            </div>
        </div>
    );
}

export default ListItem;
