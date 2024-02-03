---
title: SharePoint.Contents
---

# SharePoint.Contents


## Description

Devuelve una tabla con contenido de un sitio de SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Devuelve una tabla que contiene una fila para cada carpeta y documento encontrados en el sitio de SharePoint especificado, <code>url</code>. Cada fila contiene las propiedades de la carpeta o el archivo y un vínculo a su contenido. Se puede especificar <code>options</code> para controlar las siguientes opciones:    <ul><li><code>ApiVersion</code> : Un n&#250;mero (14 o 15) o el texto &quot;Auto&quot; que especifica la versi&#243;n de la API de SharePoint que se usar&#225; para este sitio. Cuando no se especifica, se usa la versi&#243;n 14 de la API. Cuando se especifica Auto, la versi&#243;n del servidor se detectar&#225; autom&#225;ticamente si es posible; de lo contrario, se usar&#225; la versi&#243;n predeterminada 14. Los sitios de SharePoint que no est&#225;n en ingl&#233;s requieren al menos la versi&#243;n 15.</li></ul>    



## Category
Accessing data
