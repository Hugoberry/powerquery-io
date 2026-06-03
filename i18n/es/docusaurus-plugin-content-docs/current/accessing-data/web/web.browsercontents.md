---
title: Web.BrowserContents
---

# Web.BrowserContents


Devuelve el código HTML de la dirección URL especificada, tal y como lo ve un explorador web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Devuelve el HTML del `url` especificado, tal y como lo ve un navegador web. Se puede proporcionar un parámetro de registro opcional,`options`, para especificar propiedades adicionales. El registro puede contener los siguientes campos:

-   `ApiKeyName`: si el sitio de destino tiene noción de una clave de API, este parámetro puede utilizarse para especificar el nombre (no el valor) del parámetro clave que debe usarse en la URL. El valor de clave real se proporciona en la credencial.
-   `WaitFor`: especifica una condición que debe cumplirse antes de descargar el HTML, además de esperar a que se cargue la página (lo cual siempre se hace). Puede ser un registro que contenga campos de Timeout y/o Selector. Si solo se especifica un Timeout, la función esperará el tiempo especificado antes de descargar el HTML. Si se especifican Selector y Timeout, y el Timeout transcurre antes de que el selector exista en la página, se producirá un error. Si se especifica un Selector sin Timeout, se aplicará un Timeout predeterminado de 30 segundos.


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
Accessing data
