---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Combina las columnas especificadas en una nueva columna con valores de registro donde cada registro tiene nombres de campo y valores correspondientes a los nombres de columna y los valores de las columnas combinadas.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Permite combinar las columnas especificadas de `table` en una nueva columna con valores de registro denominada `newColumnName` en la que cada registro tiene nombres y valores de campo correspondientes a los nombres de columna y los valores de las columnas que se han combinado. Si se especifica un registro para `options`, se pueden proporcionar las siguientes opciones:

-   `DisplayNameColumn`: cuando se especifica como texto, indica que el nombre de la columna en cuestión se debe tratar como el nombre para mostrar del registro. No es necesario que sea una de las columnas del propio registro.
-   `TypeName`: cuando se especifica como texto, proporciona un nombre de tipo lógico para el registro resultante que se puede usar durante la carga de datos para controlar el comportamiento del entorno de carga.



## Category
Table.Transformation
