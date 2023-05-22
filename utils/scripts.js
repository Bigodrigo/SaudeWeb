export function formataData(value) {
    const a = value.toString();
    const b = a.replaceAll('/','')
    const c = b.replace(',','')
    const d = c.replaceAll(':','')
    return d.replace(/\s/g,'')
}

export function formataCartao(value, pattern) {
    let i = 0;
    const v = value.toString();
    return pattern.replace(/#/g, _ => v[i++]);
}