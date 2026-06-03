---
title: SharePoint.Files
---

# SharePoint.Files


Devuelve una tabla que contiene documentos de un sitio web de SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla que contiene una fila para cada documento encontrado en el sitio de SharePoint especificado, `url`, y las subcarpetas. Cada fila contiene las propiedades de la carpeta o el archivo y un vínculo a su contenido. Se puede especificar `options` para controlar las siguientes opciones:

-   `ApiVersion` : Un número (14 o 15) o el texto "Auto" que especifica la versión de la API de SharePoint que se usará para este sitio. Cuando no se especifica, se usa la versión 14 de la API. Cuando se especifica Auto, la versión del servidor se detectará automáticamente si es posible; de lo contrario, se usará la versión predeterminada 14. Los sitios de SharePoint que no están en inglés requieren al menos la versión 15.



## Category
Accessing data
