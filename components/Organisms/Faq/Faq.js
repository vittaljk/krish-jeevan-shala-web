import PropTypes from 'prop-types';
import { Accordion } from 'flowbite-react';

function Faq(props) {
  const { faqs } = props;

  return (
    <div>
      <Accordion>
        {faqs.map((faq) => (
          <Accordion.Panel key={faq.id}>
            <Accordion.Title>{faq.question}</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {faq.answer}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;

Faq.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};
