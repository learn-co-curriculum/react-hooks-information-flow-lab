const Filter = ({onCategoryChange}) => {
  return(
    <select name="filter" onChange={onCategoryChange}>
      <option value="All">Filter by category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  )
}
export default Filter
