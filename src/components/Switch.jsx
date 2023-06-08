import SwitchToDarkIcon from "../images/icon-moon.svg";
import SwitchToLightIcon from "../images/icon-sun.svg";

const Switch = ({ themeLight, setThemeLight }) => {
  const switchThemeIcon = themeLight ? SwitchToDarkIcon : SwitchToLightIcon;

  const changeTheme = () => {
    setThemeLight(!themeLight);
  };

  return (
    <header>
      <div className="switch-container">
        <button className="btn switch-theme-btn" onClick={changeTheme}>
          <img src={switchThemeIcon} alt="Dark Theme" />
        </button>
      </div>
    </header>
  );
};

export default Switch;
