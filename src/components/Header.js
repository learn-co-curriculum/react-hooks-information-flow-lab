const Header = ({ onClick, isDarkMode, onDarkModeClick} ) => {
  return (
    <>
       <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </>
  )
}

export default Header
