import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dataAction } from '../../redux/action/data';
import "./style.scss";

const First = () => {
    const dispatch = useDispatch();
    const data = useSelector<any>((state) => state.data);
    console.log(data);

    useEffect(() => {
        dispatch(dataAction.getData());
    }, []);
    
    return <div className="first__view">I am the first page!!</div>;
};

export default First;
