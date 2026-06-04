---
title: SharePoint.Files
---

# SharePoint.Files


Retorna una taula que conté documents d'un lloc del SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula que conté una fila per a cada document que hi ha al lloc del SharePoint especificat, `url`, i les subcarpetes. Cada fila conté propietats de la carpeta o del fitxer i un enllaç al contingut. Es pot especificar `options` per controlar les opcions següents:

-   `ApiVersion` : Número (14 o 15) o text "Auto" que especifica la versió de l'API del SharePoint que s'utilitzarà en aquest lloc. Si no s’especifica o no es pot detectar, s'utilitzarà la versió 14 de l'API. Si s'especifica "Auto", la versió del servidor es detectarà automàticament. Els llocs del SharePoint que no estiguin en anglès necessiten, com a mínim, la versió 15.



## Category
Accessing data
