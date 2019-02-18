import { css } from 'styled-components'
import fn from '../../utils/5linear_checker'
import PropTypes from 'prop-types'

const mar =  css`
    margin: ${ 
        props => 
            fn(props.mtop, props.mrow, props.mctr, props.mctl, props.mall, 0, 'px ') +
            fn(props.mrig, props.mcol, props.mctr, props.mcbr, props.mall, 0, 'px ') + 
            fn(props.mbot, props.mrow, props.mcbl, props.mctl, props.mall, 0, 'px ') + 
            fn(props.mlef, props.mcol, props.mcbl, props.mcbr, props.mall, 0, 'px') 
    };
`
mar.propTypes = {
    mall: PropTypes.number,
    mtop: PropTypes.number,
    mbot: PropTypes.number,
    mrig: PropTypes.number,
    mlef: PropTypes.number,
    mrow: PropTypes.number,
    mcol: PropTypes.number,
    mctl: PropTypes.number,
    mctr: PropTypes.number,
    mcbl: PropTypes.number,
    mcbr: PropTypes.number
}

export default mar