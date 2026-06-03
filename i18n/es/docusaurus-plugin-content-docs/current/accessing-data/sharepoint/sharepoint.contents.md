---
title: SharePoint.Contents
---

# SharePoint.Contents


Devuelve una tabla con contenido de un sitio de SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla que contiene una fila para cada carpeta y documento encontrados en el sitio de SharePoint especificado, `url`. Cada fila contiene las propiedades de la carpeta o el archivo y un vínculo a su contenido. Se puede especificar `options` para controlar las siguientes opciones:

-   `ApiVersion` : Un número (14 o 15) o el texto "Auto" que especifica la versión de la API de SharePoint que se usará para este sitio. Cuando no se especifica, se usa la versión 14 de la API. Cuando se especifica Auto, la versión del servidor se detectará automáticamente si es posible; de lo contrario, se usará la versión predeterminada 14. Los sitios de SharePoint que no están en inglés requieren al menos la versión 15.
-   `Implementation` : Opcional. Especifica la versión del conector de SharePoint que se va a usar. Los valores aceptados son "2.0" o null. Si el valor es "2.0", se usa la implementación 2.0 del conector de SharePoint. Si el valor es null, se usa la implementación original del conector de SharePoint.



## Category
Accessing data
