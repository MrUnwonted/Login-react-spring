import React,{useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {fetchUserData} from '../../api/authenticationService';
import ListEmployeeComponent from './ListEmployeeComponent';
import HeaderComponent from '../Common/HeaderComponent';
import FooterComponent from '../Common/FooterComponent';


const MainWrapper=styled.div`
    padding-top:40px;
`;

export const Dashboard=(props)=>{

    const dispatch=useDispatch();
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState({}); console.log(data);

    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data);
        }).catch((e)=>{
            localStorage.clear();
            props.history.push('/');
        })
    },[])

    const logOut=()=>{

        localStorage.clear();
        props.history.push('/');

    }

    return (
        <>
            <HeaderComponent />
        <Container>
                <MainWrapper>
                <h4>Hello {data && `${data.firstName} ${data.lastName}`}</h4>
                <br></br>
                {data && data.roles && data.roles.filter(value => value.roleCode==='ADMIN').length>0 && 
                <>
                <br></br>
                <ListEmployeeComponent />
                </>}
                <div className='center ' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {data && data.roles && data.roles.filter(value => value.roleCode === 'USER').length > 0 && (
                    <Button type="variant">Upload</Button>
                )}
                    <br></br>
                </div>
                <Button style={{ marginTop: '5px' }} onClick={() => logOut()}>Logout</Button>

            </MainWrapper>
        </Container>
        <FooterComponent/>
        </>
    )
}