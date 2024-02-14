---
title: Table.Buffer
---

# Table.Buffer


Almacena en búfer una tabla en memoria, aislándola de los cambios externos durante la evaluación.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Almacena en búfer una tabla en memoria, aislándola de los cambios externos durante la evaluación.    El almacenamiento en búfer es superficial. Fuerza la evaluación de cualquier valor de celda escalar, pero deja los valores no escalares (registros, listas, tablas, etc.) tal cual.     <br />    <br />    Tenga en cuenta que el uso de esta función puede o no hacer que las consultas se ejecuten más rápido. En algunos casos, puede hacer que las consultas se ejecuten más lentamente debido al costo     agregado de leer todos los datos y almacenarlos en memoria, así como el hecho de que el almacenamiento en búfer impide el plegado de nivel inferior. Si no es necesario    almacenar en búfer los datos, use <code>Table.StopFolding</code> en su lugar.


## Examples

### Example #1 
Permite cargar todas las filas de una tabla SQL en la memoria para que las operaciones que siguen en la cadena ya no puedan consultar el servidor SQL Server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
