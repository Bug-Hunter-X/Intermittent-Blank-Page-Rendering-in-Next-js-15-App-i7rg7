```javascript
// pages/index.solution.js
import {useEffect, useState} from 'react';
export default function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    //Simulate an async operation that could cause the intermittent rendering issue.
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setReady(true);
    };
    fetchData();
  }, []);
  return (
    <div>
      {ready && <h1>Welcome to my Next.js app</h1>}
    </div>
  );
}
```