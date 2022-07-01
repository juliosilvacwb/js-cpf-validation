export function isValidCPF(cpf: string): boolean {

    if (!cpf) return false;

    cpf = cpf.replace(/\D/g, "");

    let soma;
    let resto;
    soma = 0;
    if (cpf == "00000000000") return false;

    for (let i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);

    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10)))
      return false;

    soma = 0;

    for (let i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);

    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11)))
      return false;

    return true;
}
