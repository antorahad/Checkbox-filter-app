

const Filter = ({ handleCheckboxChange, selectedFilter }) => {
  return (
    <div className='flex flex-col items-start justify-center gap-5'>
      <label>
        <input
          type="checkbox"
          value="all"
          checked={selectedFilter === 'all'}
          onChange={handleCheckboxChange}
          className='me-5'
        />
        All
      </label>
      <label>
        <input
          type="checkbox"
          value="paid"
          checked={selectedFilter === 'paid'}
          onChange={handleCheckboxChange}
          className='me-5'
        />
        Paid
      </label>
      <label>
        <input
          type="checkbox"
          value="free"
          checked={selectedFilter === 'free'}
          onChange={handleCheckboxChange}
          className='me-5'
        />
        Free
      </label>
    </div>
  );
};

export default Filter;
