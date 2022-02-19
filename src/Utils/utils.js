export const checkThemeAndScreenSize = (colorMode, isLargerThan768, colorLightLarger, colorLightSmaller, colorDarkLarger, colorDarkSmaller) => {
    if (colorMode === 'light' && isLargerThan768) {
        return colorLightLarger
    } else if (colorMode === 'light' && !isLargerThan768) {
        return colorLightSmaller
    } else if (colorMode === 'dark' && isLargerThan768) {
        return colorDarkLarger
    } else if (colorMode === 'dark' && !isLargerThan768) {
        return colorDarkSmaller
    }
}