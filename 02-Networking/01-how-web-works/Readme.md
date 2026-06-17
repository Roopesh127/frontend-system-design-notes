1. Request by browser
2. Parse the HTML
3. Fetch external Resources -> 1. CSS 
                               2. JS
4. Parse the css & build CSS OM
5. Execute JS ---> 1. Sync 
                   2. Async
6. Merge {DOM(html) + CSSOM(css)} => create render Tree
7. Calculate the Layout & Paint(on decided position)
8. Compositing (based on Z-index, popup,hover space)                   



Question in jio:- 

- Why creating same layout of Shimmer UI or Skeleton?
 => 1. For best UX
    2. When Browser re-render the UI then, not need to again recalculate whole layout. It'll   help to replacing and render same size of Images.

- How to optimize your project by 25% performance? search any older website and explain how you will optimize it