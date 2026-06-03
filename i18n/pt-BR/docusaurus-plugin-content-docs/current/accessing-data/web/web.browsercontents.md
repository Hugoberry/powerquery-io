---
title: Web.BrowserContents
---

# Web.BrowserContents


Retorna o HTML para o URL especificado, conforme exibido por um navegador da Web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Retorna o HTML para o `url` especificado, conforme visualizado por um navegador da Web. Um parâmetro de registro opcional, `options`, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:

-   `ApiKeyName`: se o site de destino tiver uma noção de chave de API, este parâmetro poderá ser usado para especificar o nome (não o valor) do parâmetro de chave que deve ser usado na URL. O valor real da chave é fornecido na credencial.
-   `WaitFor`: especifica uma condição a ser aguardada antes de baixar o HTML, além de aguardar o carregamento da página (o que sempre é feito). Pode ser um registro que contenha campos Tempo limite e/ou Seletor. Se apenas um tempo limite for especificado, a função aguardará o tempo especificado antes de baixar o HTML. Se um Seletor e um Tempo Limite forem especificados e o tempo limite expirar antes que o Seletor exista na página, um erro será gerado. Se um Seletor for especificado sem Timeout, será aplicado um Timeout padrão de 30 segundos.


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
Accessing data
