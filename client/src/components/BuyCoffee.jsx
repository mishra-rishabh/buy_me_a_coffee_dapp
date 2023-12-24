import { ethers } from "ethers";

const BuyCoffee = ({state}) => {
    const buy = async(event) => {
        event.preventDefault();

        const {contract} = state;

        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        const amount = {value: ethers.utils.parseEther("0.0001")};

        const txn = await contract.buyCoffee(name, message, amount);
        await txn.wait();
        console.log("txn successful");
    }
    return <>
        <form onSubmit={buy}>
            <label>Name: </label>
            <input id="name"></input>
            <br/>
            <label>Message: </label>
            <input id="message"></input>
            <br/>

            <button>Pay</button>
        </form>
    </>
}

export default BuyCoffee;