---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Devuelve el código HTML de la dirección URL especificada, tal y como lo ve un explorador web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Devuelve el HTML del <code>url</code> especificado, tal y como lo ve un navegador web. Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los siguientes campos:     <ul>        <li><code>ApiKeyName</code>: si el sitio de destino tiene noción de una clave de API, este parámetro puede utilizarse para especificar el nombre (no el valor) del parámetro clave que debe usarse en la URL. El valor real de la clave se proporciona en la credencial.</li>        <li><code>WaitFor</code>: especifica una condición a la que esperar antes de descargar el HTML, además de esperar a que se cargue la página (lo que siempre se hace). Puede ser un registro que contenga campos de Tiempo de espera y/o Selector. Si solo se especifica un Tiempo de espera, la función esperará el tiempo especificado antes de descargar el HTML. Si se especifican tanto un Selector como un Tiempo de espera, y el Tiempo de espera transcurre antes de que el Selector exista en la página, se producirá un error. Si se especifica un Selector sin Tiempo de espera, se aplicará un Tiempo de espera predeterminado de 30 segundos.</li>      </ul>    


## Examples

### Example #1 
Devuelve el código HTML de https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Permite devolver el código HTML de https://microsoft.com después de esperar a que aparezca un selector CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Devuelve el código HTML de https://microsoft.com después de esperar diez segundos.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Permite devolver el código HTML de https://microsoft.com después de esperar un máximo de diez segundos a que aparezca un selector CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Acceso a los datos
