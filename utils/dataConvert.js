export const dataFromDB = dt_data => {
    return `${dt_data.slice(8,10)}/${dt_data.slice(5,7)}/${dt_data.slice(0,4)}`;
};