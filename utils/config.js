// utils/config.js
export const useConfig = () => {
    const config = useRuntimeConfig();
    return {
        imgPath: config.public.imgPath
    };
};
