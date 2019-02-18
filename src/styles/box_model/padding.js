import { css } from 'styled-components'
import fn from '../../utils/5linear_checker'
import PropTypes from 'prop-types'

const pad =  css`
    padding: ${ 
        props => 
            fn(props.ptop, props.prow, props.pctr, props.pctl, props.pall, 0, 'px ') +
            fn(props.prig, props.pcol, props.pctr, props.pcbr, props.pall, 0, 'px ') + 
            fn(props.pbot, props.prow, props.pcbl, props.pctl, props.pall, 0, 'px ') + 
            fn(props.plef, props.pcol, props.pcbl, props.pcbr, props.pall, 0, 'px') 
    };
`
pad.propTypes = {
    pall: PropTypes.number,
    ptop: PropTypes.number,
    pbot: PropTypes.number,
    prig: PropTypes.number,
    plef: PropTypes.number,
    prow: PropTypes.number,
    pcol: PropTypes.number,
    pctl: PropTypes.number,
    pctr: PropTypes.number,
    pcbl: PropTypes.number,
    pcbr: PropTypes.number
}

export default pad