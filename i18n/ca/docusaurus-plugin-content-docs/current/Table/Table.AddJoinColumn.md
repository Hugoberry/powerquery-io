---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

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


## Details

Uneix les files de <code>table1</code> amb les files de <code>table2</code> d'acord amb la igualtat dels valors de les columnes clau seleccionades per <code>key1</code> (per a <code>table1</code>) i <code>key2</code> (per a <code>table2</code>). Els resultats s'introdueixen a la columna anomenada <code>newColumnName</code>.Aquesta funció es comporta de manera similar a Table.Join amb un JoinKind de LeftOuter excepte en el fet que els resultats de la unió es presenten de manera imbricada en lloc de plana.


## Examples

### Example #1 
Afegeix una columna d&#39;unió a (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) anomenada &#34;price/stock&#34; des de la taula (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) unida a [saleID].
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
