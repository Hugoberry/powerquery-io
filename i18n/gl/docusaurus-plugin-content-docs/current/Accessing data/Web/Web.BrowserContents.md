---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Devolve o HTML do URL especificado, tal e como se vería nun explorador web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Devolve o HTML para o <code>url</code> que se especificou, tal e como o visualiza un explorador web. Pódese fornecer un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:      <ul>        <li><code>ApiKeyName</code>: Se o sitio de destino ten unha noción de clave API, este parámetro pódese usar para especificar o nome (non o valor) do parámetro clave que se debe usar no URL. O valor real da chave proporciónase na credencial.</li>        <li><code>WaitFor</code>: especifica unha condición para esperar antes de descargar o HTML, ademais de esperar a que se cargue a páxina (o que sempre se fai). Pode ser un rexistro que contén campos Tempo de espera e/ou Selector. Se só se especifica un tempo de espera, a función agardará o tempo especificado antes de descargar o HTML. Se se especifican tanto un selector como o tempo de espera, e o tempo de espera transcorre antes de que o selector exista na páxina, xerarase un erro. Se se especifica un selector sen tempo de espera, aplícase un tempo de espera predeterminado de 30 segundos.</li>      </ul>    


## Examples

### Example #1 
Devolve o código HTML de https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Devolve o código HTML de https://microsoft.com despois de agardar a que exista un selector de CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Devolve o código HTML de https://microsoft.com despois de agardar dez segundos.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Devolve o código HTML de https://microsoft.com despois de agardar ata dez segundos a que exista un selector de CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Acceso ao datos
