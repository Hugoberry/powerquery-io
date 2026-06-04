---
title: SharePoint.Tables
---

# SharePoint.Tables


Devolve unha táboa co contido dunha lista de SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa que contén unha fila por cada elemento de lista localizado na lista de SharePoint especificada, `url`. Cada fila contén propiedades da lista. Pode especificarse `options` para controlar as seguintes opcións:

-   `ApiVersion` : Un número (14 ou 15) ou o texto "Auto" que especifica a versión da API de SharePoint que se debe usar para este sitio. Cando non se especifica, úsase a versión 14 da API. Cando se especifica Auto, a versión do servidor detéctase automaticamente se é posible; se non, establécese na versión predefinida 14. Os sitios de SharePoint que non están en inglés requiren polo menos a versión 15.
-   `Implementation` : Opcional. Especifica a versión que hai que usar do conector de SharePoint. Os valores aceptados son “2.0” ou nulo. Se o valor é “2.0”, usarase a implantación 2.0 do conector de SharePoint. Se o valor é nulo, úsase o despregamento orixinal do conector de SharePoint.
-   `ViewMode` : Opcional. Esta opción só é válida para a implantación 2.0. Os valores aceptados son “Todos" e "Predefinidos". Se non se especifica ningún valor, o valor establécese en "Todos". Cando se especifica "Todos", a vista inclúe todas as columnas creadas polo usuario e definidas polo sistema. Cando se especifique "Default", a vista coincidirá co que o usuario ve ao mirar a lista en liña na que vexa o usuario configurado como Predefinido na súa configuración. Se o usuario edita a súa vista predefinida para engadir ou eliminar as columnas creadas polo usuario ou definidas polo sistema, ou ben creando unha nova vista e configurándoa como predeterminada, estes cambios propagaranse a través do conector.
-   `DisableAppendNoteColumns` : Evita que o conector use un extremo separado para as columnas de notas.



## Category
Accessing data
