
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

export default function Memo({ state }) {

    const [memo, setMemo] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const Memos = async () => {
            const memos = await contract.getMemos();
            setMemo(memos);
        }
        contract && Memos();
    }, [contract])

    return (
        <>
            <p style={{ textAlign: "center", marginTop: "20px" , color : "red" ,fontSize : "2rem"}}>Messages</p>
            {memo.map((memo) => {
                return (
                    <div
                        className="container-fluid"
                        style={{ width: "100%" }}
                        key={Math.random()}
                    >
                        <table
                            style={{
                                marginBottom: "10px",
                            }}
                        >
                            <tbody>
                                <tr>
                                    <td
                                        style={{
                                            backgroundColor: "#96D4D4",
                                            border: "1px solid white",
                                            borderCollapse: "collapse",
                                            padding: "7px",
                                            width: "100px",
                                        }}
                                    >
                                        {memo.name}
                                    </td>
                                    <td
                                        style={{
                                            backgroundColor: "#96D4D4",
                                            border: "1px solid white",
                                            borderCollapse: "collapse",
                                            padding: "7px",
                                            width: "800px",
                                        }}
                                    >
                                        {new Date(memo.time * 1000).toLocaleString()}
                                    </td>
                                    <td
                                        style={{
                                            backgroundColor: "#96D4D4",
                                            border: "1px solid white",
                                            borderCollapse: "collapse",
                                            padding: "7px",
                                            width: "300px",
                                        }}
                                    >
                                        {memo.message}
                                    </td>
                                    <td
                                        style={{
                                            backgroundColor: "#96D4D4",
                                            border: "1px solid white",
                                            borderCollapse: "collapse",
                                            padding: "7px",
                                            width: "400px",
                                        }}
                                    >
                                        {memo.from}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </>
    )
}
