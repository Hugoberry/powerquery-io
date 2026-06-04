---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Duu a terme una unió entre taules en columnes proporcionades i produeix el resultat de la unió en una columna nova.


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

Uneix les files de `table1` amb les files de `table2` d'acord amb la igualtat dels valors de les columnes clau seleccionades per `key1` (per a `table1`) i `key2` (per a `table2`). Els resultats s'introdueixen a la columna anomenada `newColumnName`. Aquesta funció es comporta de manera similar a Table.Join amb un JoinKind de LeftOuter excepte en el fet que els resultats de la unió es presenten de manera imbricada en lloc de plana.


## Examples

### Example #1
Afegeix una columna d'unió a (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) anomenada "price/stock" des de la taula (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) unida a \[saleID\].
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
