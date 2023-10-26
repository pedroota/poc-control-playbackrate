# READ FIRST

You can add this logic to basic any framework that you need (React, Svelte, Vue, Angular, etc...).
Basically you should just use the best practices of each framework, for example, in React, you'd something like this:

```js
const ReactComponent = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    videoRef.current?.playbackRate = 1
  }, [videoRef])

  return (
    <main>
      <video ref={videoRef}>
        <source src="/video-source" type="video/type" />
      </video>
    </main>
  );
};
```
