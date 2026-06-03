---
title: Web.BrowserContents
---

# Web.BrowserContents


Retourne le code HTML de l’URL spécifiée, tel qu’il est affiché par un navigateur web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Renvoie le code HTML de l’enregistrement spécifié `url`, tel qu’il est affiché par un navigateur Web. Un paramètre d’enregistrement facultatif, `options`, peut être fourni pour spécifier des propriétés supplémentaires. L’enregistrement peut contenir les champs suivants :

-   `ApiKeyName` : Si le site cible a une notion de clé API, ce paramètre peut être utilisé pour spécifier le nom (et non la valeur) du paramètre clé qui doit être utilisé dans l’URL. La valeur de clé réelle est fournie dans les informations d’identification.
-   `WaitFor` : spécifie une condition à attendre avant de télécharger le code HTML, en plus d’attendre le chargement de la page (ce qui est toujours fait). Peut être un enregistrement contenant des champs Timeout et/ou Selector. Si seul un délai d’attente est spécifié, la fonction attendra le temps spécifié avant de télécharger le HTML. Si un sélecteur et un délai sont spécifiés, et que le délai s’écoule avant que le sélecteur n’existe sur la page, une erreur sera déclenchée. Si un sélecteur est spécifié sans délai d’attente, un délai d’attente par défaut de 30 secondes est appliqué.


## Examples

### Example #1
Retourne le code HTML de https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
Retourne le code HTML de https://microsoft.com après avoir attendu l'existence d'un sélecteur CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
Retourne le code HTML de https://microsoft.com au bout de dix secondes.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
Retourne le code HTML de https://microsoft.com après avoir attendu 10 secondes l'existence d'un sélecteur CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
