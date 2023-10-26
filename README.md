# READ FIRST

You can add this logic to basic any framework that you need (React, Svelte, Vue, Angular, etc...).
Basically you should just use the best practices of each framework, for example, in React, you'd something like this:

```js
import React, { useRef } from 'react';

const ReactComponent = () => {
  const videoRef = useRef(null);

  const handleRateChange = () => {
    videoRef.current.playbackRate = 1;
  };

  return (
    <main>
      <video ref={videoRef} onRateChange={handleRateChange}>
        <source src="/video-source" type="video/type" />
      </video>
    </main>
  );
};
```
