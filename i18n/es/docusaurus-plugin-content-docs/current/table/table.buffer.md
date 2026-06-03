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

Almacena en búfer una tabla en memoria y la aísla de los cambios externos durante la evaluación. El almacenamiento en búfer es superficial. Fuerza la evaluación de cualquier valor de celda escalar, pero deja los valores no escalares (registros, listas, tablas, etc.) tal cual.

-   `table`: tabla que se va a almacenar en búfer en memoria.
-   `options`: (Opcional) se pueden usar los siguientes valores de registro de opciones:
    -   `BufferMode`: el modo de búfer que describe el tipo de almacenamiento en búfer que se va a realizar. Esta opción puede ser `BufferMode.Eager` o `BufferMode.Delayed`.

El uso de esta función podría o no hacer que las consultas se ejecuten más rápido. En algunos casos, puede hacer que las consultas se ejecuten más lentamente debido al agregado coste de leer todos los datos y almacenarlos en memoria, así como el hecho de que el almacenamiento en búfer impide el plegado de nivel inferior. Si los datos no necesitan ser almacenado en búfer, pero solo quiere evitar el plegado de nivel inferior, use `Table.StopFolding` en su lugar.


## Examples

### Example #1
Permite cargar todas las filas de una tabla SQL en la memoria para que las operaciones que siguen en la cadena ya no puedan consultar el servidor SQL Server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
