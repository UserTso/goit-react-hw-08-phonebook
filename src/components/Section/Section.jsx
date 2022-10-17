import PropTypes from 'prop-types';

export function Section({title, children}) { 
    console.log(typeof children)
    
    return (
        <section>
            <h1>
                {title}
            </h1>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};