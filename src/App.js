import React, { useState } from 'react';

function App() {
    const [jsonInput, setJsonInput] = useState('');
    const [responseData, setResponseData] = useState(null);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/bfhl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: JSON.parse(jsonInput) })
            });
            const data = await response.json();
            setResponseData(data);
        } catch (error) {
            alert('Invalid JSON ya network error');
        }
    };

    return (
        <div>
            <h1>BFHL API Frontend</h1>
            <textarea
                rows="4"
                cols="50"
                placeholder='Enter JSON here...'
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            {responseData && (
                <div>
                    <h3>Response Data</h3>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
