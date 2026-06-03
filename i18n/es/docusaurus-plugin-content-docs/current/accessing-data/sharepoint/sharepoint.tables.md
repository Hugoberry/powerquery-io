---
title: SharePoint.Tables
---

# SharePoint.Tables


Devuelve una tabla que incluye contenido de una lista de SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla que contiene una fila para cada elemento de lista encontrado en la lista de SharePoint especificada, `url`. Cada fila contiene las propiedades de la lista. Se puede especificar `options` para controlar las siguientes opciones:

-   `ApiVersion` : Un número (14 o 15) o el texto "Auto" que especifica la versión de la API de SharePoint que se usará para este sitio. Cuando no se especifica, se usa la versión 14 de la API. Cuando se especifica Auto, la versión del servidor se detectará automáticamente si es posible; de lo contrario, se usará la versión predeterminada 14. Los sitios de SharePoint que no están en inglés requieren al menos la versión 15.
-   `Implementation` : Opcional. Especifica la versión del conector de SharePoint que se va a usar. Los valores aceptados son "2.0" o null. Si el valor es "2.0", se usa la implementación 2.0 del conector de SharePoint. Si el valor es null, se usa la implementación original del conector de SharePoint.
-   `ViewMode` : Opcional. Esta opción solo es válida para la implementación 2.0. Los valores aceptados son "Todas" y "Predeterminado". Si no se especifica ningún valor, el valor se establece en "Todas". Cuando se especifica "Todas", la vista incluye todas las columnas creadas por el usuario y definidas por el sistema. Cuando se especifica "Predeterminado", la vista coincidirá con lo que el usuario vea al ver la lista en línea en la vista que el usuario establezca como predeterminada en su configuración. Si el usuario edita la vista predeterminada para agregar o quitar columnas creadas por el usuario o definidas por el sistema, o al crear una nueva vista y establecerla como predeterminada, estos cambios se propagarán a través del conector.
-   `DisableAppendNoteColumns` : Evita que el conector utilice un punto de conexión independiente para las columnas de notas.



## Category
Accessing data
