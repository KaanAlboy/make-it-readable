import React from 'react'

import { If, For } from 'make-it-readable'
import 'make-it-readable/dist/index.css'

const App = () => {
  return (
    <div>
      {/* If component usage*/}

      <If
        condition={true}
        then={() => <div>Condition is true!</div>}
        else={() => <div>Condition is false!</div>}
      ></If>

      <If condition={false}>
        {() => <div>You can pass your "then function" as a child aswell!</div>}
      </If>

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

      {/*For component usage*/}

      <For
        arr={['a', 'b', 'c', 'd']}
        render={(item) => <div key={item}>{item}</div>}
      ></For>

      <For arr={['a', 'b', 'c', 'd']}>
        {(item) => <div key={item}>{item}</div>}
      </For>

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
