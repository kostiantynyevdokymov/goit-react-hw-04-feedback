import PropTypes from 'prop-types';
import Title from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
};
