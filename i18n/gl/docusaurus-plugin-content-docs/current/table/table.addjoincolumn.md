---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Executa unha asociación entre táboas en columnas fornecidas e produce o resultado da unión nunha nova columna.


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

Une as filas de `table1` coas filas de `table2` baseándose na igualdade dos valores das columnas clave seleccionadas por `key1` (para `table1`) e `key2` (para `table2`). Os resultados introdúcense na columna co nome `newColumnName`. Esta función compórtase de xeito similar a Table.Join cun JoinKind de LeftOuter agás que os resultados da asociación se presentan nunha maneira aniñada en vez de simplificada.


## Examples

### Example #1
Engadir unha columna de unión a (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) co nome "prezo/stock" da táboa (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) unida por \[saleID\].
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
