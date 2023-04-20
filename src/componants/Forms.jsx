import { useState } from 'react'
// import './src/App.css'

export default function Profile() {
    const [name, setName] = useState("");
    return (
        <div className="App">
            <h2>input value : {name}</h2>
            <form>
                <label>Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </form>
        </div>
    );
}
