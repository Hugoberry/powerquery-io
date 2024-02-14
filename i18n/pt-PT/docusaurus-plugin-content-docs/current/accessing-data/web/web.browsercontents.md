---
title: Web.BrowserContents
---

# Web.BrowserContents


Devolve o HTML para o URL especificado, conforme visualizado por um browser.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Devolve o HTML para o <code>url</code> especificado, conforme visualizado por um browser. Pode ser fornecido um parâmetro de <code>options</code> opcional para especificar propriedades adicionais. O registo pode conter os seguintes campos:     <ul>        <li><code>ApiKeyName</code>: se o site de destino tiver uma noção de uma chave de API, este parâmetro pode ser utilizado para especificar o nome (e não o valor) do parâmetro da chave que tem de ser utilizado no URL. O valor da chave em questão é fornecido na credencial.</li>        <li><code>WaitFor</code>: especifica uma condição para aguardar antes de transferir o HTML, além de aguardar que a página seja carregada (o que é sempre efetuado). Pode ser um registo que contém os campos Tempo Limite e/ou Seletor. Se for especificado apenas um Tempo Limite, a função aguardará o período de tempo especificado antes de transferir o HTML. Se for especificado um Seletor e um Tempo Limite e o Tempo Limite ocorrer antes de o Seletor existir na página, será apresentada uma mensagem de erro. Se for especificado um Seletor sem Tempo Limite, será aplicado um Tempo Limite predefinido de 30 segundos.</li>      </ul>    


## Examples

### Example #1 
Devolve o HTML para https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Devolve o HTML para https://microsoft.com após aguardar que um seletor CSS exista.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Devolve o HTML para https://microsoft.com após aguardar dez segundos.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Devolve o HTML para https://microsoft.com após aguardar até dez segundos para que o seletor CSS exista.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
A aceder aos dados
