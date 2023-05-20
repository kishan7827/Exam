import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getData } from './action';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

    const dispatch = useDispatch();

    const { isLoading, homePageData } = useSelector((store) => ({
        isLoading: store?.home?.loading,
        homePageData: store?.home?.homePageData
    }));

    useEffect(() => {
        dispatch(getData())
    }, []);

    console.log(homePageData);

    return (
        <>
            {isLoading ? "Loading..." : <div className="my-5">
                <h1>Table</h1>
                <div className="mt-5">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {homePageData?.map((i, index) => (
                                <tr>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            }
        </>
    )
}

