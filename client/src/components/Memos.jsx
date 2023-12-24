import { memo, useEffect, useState } from "react";

const Memos = ({state}) => {
    const [memos, setMemos] = useState([]);
    const {contract} = state;

    useEffect(() => {
        const memosMessage = async() => {
            const memos = await contract.getMemos();
            setMemos(memos);
        };
        contract && memosMessage();
    }, [contract]);

    return (
        <div>
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>Messages</h3>

            <table style={{border: "2px solid black"}}>
                <tbody>
                    {memos.map((memo) => {
                        return (
                            <tr>
                                <td style={{border: "1.5px solid black"}}>{memo.name}</td>
                                <td style={{border: "1.5px solid black"}}>{memo.message}</td>
                                <td style={{border: "1.5px solid black"}}>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
                                <td style={{border: "1.5px solid black"}}>{memo.from}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Memos;