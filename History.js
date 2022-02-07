import React from 'react';

const History = props => {
  const {
    history,
    handleDelete,
    handleEdit,
    editForm,
    handleInputChange,
    handleSubmit,
    clearEditForm,
  } = props;

  return (
    <div id="history">
      <h2>History</h2>
      <table>
        <tbody>
          {(history.length)
            ? history.map((historyItem) => {
                const { key, text, amount } = historyItem;
                if (editForm.trkey === key) {
                  return (
                    <tr key={key} className="editItem">
                      <td>
                        <form onSubmit={handleSubmit} className="editform">
                          <input
                            type="text"
                            name="text"
                            value={editForm.text}
                            onChange={handleInputChange}
                          />
                          <input
                            type="text"
                            name="amount"
                            value={editForm.amount}
                            onChange={handleInputChange}
                          />
                          <input
                            type="submit"
                            value="✓"
                          />
                          <button onClick={clearEditForm}>
                            ✕
                          </button>
                        </form>
                      </td>
                    </tr>
                  )
                }
                return (
                  <tr key={key} className="historyItem">
                    <td>{text}</td>
                    <td style={rightBorder(amount)}>{amount}</td>
                    <td>
                      <button onClick={() => handleEdit(key)}>
                        e
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(key)}>
                        x
                      </button>
                    </td>
                  </tr>
                );
              })
            : <tr>
                <td></td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

const rightBorder = amount => {
  if (amount > 0) {
    return { borderRight: "3px solid #00ff00" };
  } else if (amount < 0) {
    return { borderRight: "3px solid #ff0000" };
  } else {
    return { borderRight: "3px solid #ffffff" };;
  }
}

export default History;
