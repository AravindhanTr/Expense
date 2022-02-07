import React from 'react';

const Transactions = React.forwardRef((props, ref) => {
  const { form, handleSubmit, handleInputChange, hint } = props;
  const { amount, text } = form;

  return (
    <div id="transactions">
      <h2>Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>Text
          <input
            ref={ref}
            type="text"
            name="text"
            value={text}
            placeholder="enter text..."
            onChange={handleInputChange}
          />
          {(hint.includes('text')) && <span className="hint">Invalid input</span>}
        </label>
        <label>Amount
          <input
            type="text"
            name="amount"
            value={amount}
            placeholder="enter amount..."
            onChange={handleInputChange}
          />
          {(hint.includes('amount')) && <span className="hint">Invalid amount</span>}
        </label>
        <input
          type="submit"
          value="Add"
        />
      </form>
      {
        (hint.includes('zero'))
          && <span className="hint">value is 0 Please Enter the valid value </span>
      }
    </div>
  )

});
export default Transactions;
