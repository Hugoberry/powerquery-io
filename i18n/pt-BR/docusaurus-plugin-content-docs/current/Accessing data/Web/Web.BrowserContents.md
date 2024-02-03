---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Retorna o HTML para o URL especificado, conforme exibido por um navegador da Web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Retorna o HTML para o <code>url</code> especificado, conforme exibido por um navegador da Web. Um parâmetro de registro opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:     <ul>        <li><code>ApiKeyName</code>: se o site de destino tiver uma noção de uma chave de API, esse parâmetro poderá ser usado para especificar o nome (não o valor) do parâmetro da chave que deverá ser usada na URL. O valor real da chave é fornecido na credencial.</li>        <li><code>WaitFor</code>: especifica uma condição para aguardar antes de baixar o HTML, além de aguardar o carregamento da página (o que sempre é feito). Pode ser um registro contendo os campos de Tempo Limite e/ou Seletor. Se apenas um Tempo Limite for especificado, a função aguardará a quantidade de tempo especificada antes de baixar o HTML. Se um Seletor e um Tempo Limite forem especificados e o Tempo Limite decorrer antes que um Seletor exista na página, um erro será gerado. Se um Seletor for especificado sem Tempo Limite, um Tempo Limite padrão de 30 segundos será aplicado.</li>      </ul>    


## Examples

### Example #1 
Retorna o HTML para https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Retorna o HTML para https://microsoft.com depois de aguardar pela existência de um seletor de CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Retorna o HTML para https://microsoft.com após esperar dez segundos.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Retorna o HTML para https://microsoft.com depois de esperar por até dez segundos pela existência de um seletor de CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Dados acessados
