---
title: Web.BrowserContents
---

# Web.BrowserContents


Retorna el codi HTML de l'adreça URL especificada, segons es visualitza en un navegador web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Torna el codi HTML de la pàgina especificada (`url`), tal com el visualitza un navegador web. És possible proporcionar un paràmetre de registre opcional (`options`) per especificar propietats addicionals. El registre pot contenir els camps següents:

-   `ApiKeyName`: si el lloc de destinació té una noció d'una clau d'API, aquest paràmetre es pot fer servir per especificar el nom (no el valor) del paràmetre clau que s'ha de fer servir a l'URL. El valor real de la clau es proporciona a la credencial.
-   `WaitFor`: especifica una condició que s'ha d'esperar abans de baixar l'HTML, a més d'esperar que la pàgina es carregui (això es fa sempre). Pot ser un registre que contingui els camps Timeout o Selector. Si només s'especifica el temps d'espera, la funció esperarà el temps que s'hagi especificat abans de descarregar l'HTML. Si s'especifica tant el temps d'espera com el selector, i si passa el temps d'espera abans que el selector es mostri a la pàgina, es produirà un error. Si s'especifica un selector sense temps d'espera, s'aplicarà un temps d'espera per defecte de 30 segons.


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
Permet tornar el codi HTML de https://microsoft.com després d'esperar que aparegui un selector CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
Torna el codi HTML de https://microsoft.com després d'esperar deu segons.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
Permet tornar el codi HTML de https://microsoft.com després d'esperar un màxim de deu segons que aparegui un selector CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
