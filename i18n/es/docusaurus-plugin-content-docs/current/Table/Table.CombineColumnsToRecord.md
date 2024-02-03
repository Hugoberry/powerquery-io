---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

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


## Details

Permite combinar las columnas especificadas de <code>table</code> en una nueva columna con valores de registro denominada <code>newColumnName</code> en la que cada registro tiene nombres y valores de campo correspondientes a los nombres de columna y los valores de las columnas que se han combinado. Si se especifica un registro para <code>options</code>, se pueden proporcionar las siguientes opciones:     <ul>     <li> <code>DisplayNameColumn</code>: cuando se especifica como texto, indica que el nombre de la columna en cuestión se debe tratar como el nombre para mostrar del registro. No es necesario que sea una de las columnas del propio registro.</li>     <li> <code>TypeName</code>: cuando se especifica como texto, proporciona un nombre de tipo lógico para el registro resultante que se puede usar durante la carga de datos para controlar el comportamiento del entorno de carga.</li>    </ul>    



## Category
Table.Transformation
