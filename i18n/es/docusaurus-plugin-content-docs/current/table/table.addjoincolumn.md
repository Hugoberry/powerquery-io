---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Realiza una combinación de las tablas en las columnas proporcionadas y genera el resultado de la combinación en una nueva columna.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

Combina las filas de `table1` con las filas de `table2` según la igualdad de los valores de las columnas de clave seleccionadas por `key1` (para `table1`) y `key2` (para `table2`). Los resultados se especifican en la columna denominada `newColumnName`. Esta función se comporta de forma similar a Table.Join con un JoinKind de LeftOuter salvo en que los resultados de la combinación se muestran de forma anidada en lugar de sin formato.


## Examples

### Example #1
Agregar una columna de combinación a (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) con el nombre "price/stock" a partir de la tabla (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) unida a \[saleID\].
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
