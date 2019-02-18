import PropTypes from 'prop-types'

/**
 * Check values ​​by priority returned the highest priority value and add the independent term
 * @param {string} x_gradient  highest priority
 * @param {string} y_gradient  higher priority 
 * @param {string} z_gradient  medium priority
 * @param {string} w_gradient  lower priority
 * @param {string} t_gradient  lowest priority
 * @param {string} defultVal   default value
 * @param {string} independent value added at the end
 */
const fn = (x_gradient, 
    y_gradient, 
    z_gradient, 
    w_gradient, 
    t_gradient, 
    defultVal, 
    independent) => (
        (x_gradient ? x_gradient : 
            (y_gradient ? y_gradient : 
                (z_gradient ? z_gradient : 
                    (w_gradient ? w_gradient :
                        (t_gradient ? t_gradient :defultVal)
                    )
                )
            )
        ) + independent
)

fn.propTypes = {
    x_gradient: PropTypes.string,
    y_gradient: PropTypes.string,
    z_gradient: PropTypes.string, 
    w_gradient: PropTypes.string, 
    t_gradient: PropTypes.string, 
    defultVal: PropTypes.string.isRequired,
    independent: PropTypes.string.isRequired
}

export default fn