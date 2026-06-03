---
title: Table.Group
---

# Table.Group


Agrupa las filas de la tabla que tienen la misma clave.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Agrupa las filas de `table` por las columnas clave definidas por `key`. El `key` puede ser un solo nombre de columna, o una lista de nombres de columnas. Para cada grupo, se construye un registro que contiene las columnas clave (y sus valores), junto con cualquier columna agregada especificada por `aggregatedColumns`. Opcionalmente, `groupKind` también se puede especificar y. `comparer`  
  
Si los datos ya están ordenados por las columnas clave, entonces se puede proporcionar un de `groupKind` GroupKind.Local. Esto puede mejorar el rendimiento de la agrupación en ciertos casos, ya que se supone que todas las filas con un conjunto dado de valores clave son contiguas.  
  
Al pasar a `comparer`, tenga en cuenta que si trata las claves diferentes como iguales, una fila puede colocarse en un grupo cuyas claves difieren de las suyas.  
  
Esta función no garantiza el orden de las filas que devuelve.


## Examples

### Example #1
Agrupar la tabla agregando una columna agregada \[total\] que contiene la suma de precios ("each List.Sum(\[price\])").
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
