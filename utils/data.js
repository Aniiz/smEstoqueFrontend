let data = {
    ano: new Date().getFullYear(),
    dia() {
      let dia = new Date().getDate();
      if (dia < 10) dia = '0' + String(dia)
      return dia;
    },
    mes() {
      let mes = new Date().getMonth() + 1;
      if (mes < 10) mes = '0' + String(mes)
      return mes;
    }
}
  
export function retornaData() {
    const time = `${data.dia()}/${data.mes()}/${data.ano}`
    return time;
}