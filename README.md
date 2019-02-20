# ds-styled
Design system for the styled-components library

# Install

```
npm install ds-styled
```

# How to use

Import styled-components library and functions to used

```javascript
import styled from 'styled-components'
import { margin } from 'ds-styled'
```

Define your tag styled adding the functions properties

```javascript
const Box = styled.div`
  ${ margin }
`
```

Use your tag styled adding the props to the components

```javascript
<Box mall="10">
    Hola
</Box>
```
