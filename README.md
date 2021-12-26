# make-it-readable

This is a React library to make the code more easy on the eye by using render props.

[![NPM](https://img.shields.io/npm/v/make-it-readable.svg)](https://www.npmjs.com/package/make-it-readable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save make-it-readable
```

## Components

- **If**
    
    If component's main use case is to not use ternary functions inside render.
 
  - Usage 1
  
  ```jsx
  import React from 'react'

  import { If } from 'make-it-readable'

  const App = () => {
    return (
      <div>
        <If
          condition={true}
          then={() => <div>Condition is true!</div>}
          else={() => <div>Condition is false!</div>}
        ></If>
      </div>
    )
  }

  export default App
  ```

  - Usage 2
  
  ```jsx
  import React from 'react'

  import { If } from 'make-it-readable'

  const App = () => {
    return (
      <div>
        <If condition={false}>
          {() => <div>You can pass your "then function" as a child aswell!</div>}
        </If>
      </div>
    )
  }

  export default App
  ```

  - Usage 3
 
  ```jsx
  import React from 'react'

  import { If } from 'make-it-readable'

  const App = () => {
    return (
      <div>
        <If condition={false}>
          {{
            then: () => (
              <div>
                If you want to pass an else function aswell, you can put your
                functions in an object as children of the If component
              </div>
            ),
            else: () => <div>Else</div>
          }}
        </If>
      </div>
    )
  }

  export default App
  ```
    
- **For**
    
    For component's main use case is to not use mapping functions inside render.
    - Usage 1
    ```jsx
      import React from 'react'

      import { For } from 'make-it-readable'

      const App = () => {
        return (
          <div>
            <For
              arr={['a', 'b', 'c', 'd']}
              render={(item) => <div key={item}>{item}</div>}
            ></For>
          </div>
        )
      }

      export default App
    ```
    
    - Usage 2
    ```jsx
      import React from 'react'

      import { For } from 'make-it-readable'

      const App = () => {
        return (
          <div>
            <For arr={['a', 'b', 'c', 'd']}>
              {(item) => <div key={item}>{item}</div>}
            </For>
          </div>
        )
      }

      export default App

    ```
    
- **Bonus**
```jsx
  import React from 'react'

  import { For, If } from 'make-it-readable'

  const App = () => {
    return (
      <div>
        <For arr={['a', 'b', 'c', 'd']}>
          {(item) => (
            <If condition={item === 'a' || item === 'b'}>
              {{
                then: () => (
                  <div key={item}>
                    <strong>{item}</strong>
                  </div>
                ),
                else: () => <div key={item}>{item}</div>
              }}
            </If>
          )}
        </For>
      </div>
    )
  }

  export default App
```

## License

MIT © [KaanAlboy](https://github.com/KaanAlboy)
