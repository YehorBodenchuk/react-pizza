function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Подарок'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} className={value === i ? 'active' : ''} onClick={() => onChangeCategory(i)}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
