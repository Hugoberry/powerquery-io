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

Combina las filas de <code>table1</code> con las filas de <code>table2</code> según la igualdad de los valores de las columnas de clave seleccionadas por <code>key1</code> (para <code>table1</code>) y <code>key2</code> (para <code>table2</code>). Los resultados se especifican en la columna denominada <code>newColumnName</code>.Esta función se comporta de forma similar a Table.Join con un JoinKind de LeftOuter salvo en que los resultados de la combinación se muestran de forma anidada en lugar de sin formato.


## Examples

### Example #1 
Agregar una columna de combinación a (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) con el nombre &#34;price/stock&#34; a partir de la tabla (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) unida a [saleID].
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
