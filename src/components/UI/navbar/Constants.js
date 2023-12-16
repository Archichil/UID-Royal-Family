import i18n from "../../../i18n";

export const backgroundColors = {
    default: '#222',
    highlighted: '#2f2f2f',
}

export const colors = {
    default: '255,255,255',
    gold: '255,223,0',
};

export const animationConfig = {
    duration: 50,
    tension: 120,
    friction: 14,
    mass: 1,
};

export const animationProps = {
    color: colors.default,
    config: animationConfig,
};

export const getBackground = (isTarget) => {
    return isTarget ? backgroundColors.highlighted : backgroundColors.default;
};

export const swapLanguage = () => {
    if (i18n.language === 'ru') { i18n.changeLanguage('en') }
    else                        { i18n.changeLanguage('ru')}
}