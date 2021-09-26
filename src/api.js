export const get = async (list) => {
    const response = await localStorage.getItem(list);
    return response?JSON.parse(response):[];
};

export const post = async (list, data) => {
    const auxiliar = await (localStorage.getItem(list)?JSON.parse(localStorage.getItem(list)):[]);
    auxiliar.push(data);
    localStorage.setItem(list, JSON.stringify(auxiliar));
    return true;
}

export const update = async (list, chave) => {
    const auxiliar = await (localStorage.getItem(list)?JSON.parse(localStorage.getItem(list)):[]);
    if(auxiliar[chave]){
        auxiliar[chave].done = !auxiliar[chave].done;
    }
    localStorage.setItem(list, JSON.stringify(auxiliar));
    return true;
}

export const removeall = async (list) => {
    localStorage.removeItem(list);
}