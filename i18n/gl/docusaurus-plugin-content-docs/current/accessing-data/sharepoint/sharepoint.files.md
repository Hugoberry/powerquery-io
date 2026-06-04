---
title: SharePoint.Files
---

# SharePoint.Files


Devolve unha táboa que contén documentos dun sitio SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa que contén unha fila por cada documento localizado no sitio de SharePoint especificado, `url`, e subcartafoles. Cada fila contén propiedades do cartafol ou do ficheiro e unha ligazón ao seu contido. Pode especificarse `options` para controlar as seguintes opcións:

-   `ApiVersion` : Un número (14 ou 15) ou o texto "Auto" que especifica a versión da API de SharePoint que se debe usar para este sitio. Cando non se especifica, úsase a versión 14 da API. Cando se especifica Auto, a versión do servidor detéctase automaticamente se é posible; se non, establécese na versión predefinida 14. Os sitios de SharePoint que non están en inglés requiren polo menos a versión 15.



## Category
Accessing data
