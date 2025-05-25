import React from 'react';
import PropTypes from 'prop-types';
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
  // If totalCosts is an object (venue, av, meals), sum its values,
  // otherwise assume it's already a number.
  const grandTotal =
      typeof totalCosts === 'object'
          ? Object.values(totalCosts).reduce((sum, n) => sum + n, 0)
          : totalCosts;

  return (
      <div className="pricing-app">
        <div className="display_box">
          <div className="header">
            <h3>Total cost for the event</h3>
          </div>

          <div className="price-container">
            <h2 id="pre_fee_cost_display" className="price">
              ${grandTotal}
            </h2>
          </div>

          {/* Render details table if you passed in a function */}
          {ItemsDisplay && (
              <div className="details-section">
                <ItemsDisplay />
              </div>
          )}
        </div>
      </div>
  );
};

TotalCost.propTypes = {
  totalCosts: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number)
  ]).isRequired,
  ItemsDisplay: PropTypes.func,  // a render-prop that returns your table
};

TotalCost.defaultProps = {
  ItemsDisplay: null,
};

export default TotalCost;
