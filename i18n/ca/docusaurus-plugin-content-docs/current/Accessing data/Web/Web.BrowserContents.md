---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Retorna el codi HTML de l&#39;adreça URL especificada, segons es visualitza en un navegador web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Torna el codi HTML de la pàgina especificada (<code>url</code>), tal com el visualitza un navegador web. És possible proporcionar un paràmetre de registre opcional (<code>options</code>) per especificar propietats addicionals. El registre pot contenir aquests camps:     <ul>        <li><code>ApiKeyName</code>: si el lloc de destinació té una noció de la clau de l'API, es pot fer servir aquest paràmetre per especificar el nom (no el valor) del paràmetre de la clau que cal fer servir a l'URL. El valor real de la clau es proporciona a la credencial.</li>        <li><code>WaitFor</code>: especifica una condició que s'ha d'esperar abans de descarregar l'HTML, a més d'esperar que la pàgina es carregui (això es fa sempre). Pot ser un registre que contingui els camps Timeout o Selector. Si només s'especifica el temps d'espera, la funció esperarà el temps que s'hagi especificat abans de descarregar l'HTML. Si s'especifica tant el temps d'espera com el selector, i si passa el temps d'espera abans que el selector es mostri a la pàgina, es generarà un error. Per últim, si s'especifica un selector sense temps d'espera, s'aplicarà un temps d'espera per defecte de 30 segons.</li>      </ul>    


## Examples

### Example #1 
Torna el codi HTML de https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Permet tornar el codi HTML de https://microsoft.com després d&#39;esperar que aparegui un selector CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Torna el codi HTML de https://microsoft.com després d&#39;esperar deu segons.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Permet tornar el codi HTML de https://microsoft.com després d&#39;esperar un màxim de deu segons que aparegui un selector CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accés a les dades
