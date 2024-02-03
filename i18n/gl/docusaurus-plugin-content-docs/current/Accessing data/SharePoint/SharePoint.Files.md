---
title: SharePoint.Files
---

# SharePoint.Files


## Description

Devolve unha táboa que contén documentos dun sitio SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa que contén unha fila por cada documento localizado no sitio de SharePoint especificado, <code>url</code>, e subcartafoles. Cada fila contén propiedades do cartafol ou do ficheiro e unha ligazón ao seu contido. Pode especificarse <code>options</code> para controlar as seguintes opcións:    <ul><li><code>ApiVersion</code> : Un n&#250;mero (14 ou 15) ou o texto &quot;Auto&quot; que especifica a versi&#243;n da API de SharePoint que se debe usar para este sitio. Cando non se especifica, &#250;sase a versi&#243;n 14 da API. Cando se especifica Auto, a versi&#243;n do servidor det&#233;ctase automaticamente se &#233; posible; se non, establ&#233;cese na versi&#243;n predefinida 14. Os sitios de SharePoint que non est&#225;n en ingl&#233;s requiren polo menos a versi&#243;n 15.</li></ul>    



## Category
Accessing data
