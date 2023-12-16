export const backgroundColors = {
    default: '#222',
    highlighted: '#2f2f2f',
}

export const colors = {
    default: '255,255,255',
    gold: '255,223,0',
};

const animationConfig = {
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