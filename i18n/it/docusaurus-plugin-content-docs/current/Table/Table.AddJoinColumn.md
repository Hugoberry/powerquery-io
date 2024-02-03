---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

Esegue un join tra tabelle per le colonne specificate e fornisce il risultato del join in una nuova colonna.


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

Unisce in join le righe di <code>table1</code> con le righe <code>table2</code> in base all'uguaglianza dei valori delle colonne chiave selezionate da <code>key1</code> (per <code>table1</code>) e da <code>key2</code> (per <code>table2</code>). I risultati sono inseriti nella colonna denominata <code>newColumnName</code>.Il comportamento di questa funzione è analogo a Table.Join con JoinKind di LeftOuter, salvo che i risultati del join sono presentati in modalità annidata anziché flat.


## Examples

### Example #1 
Aggiungere una colonna di join a (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) denominata &#34;price/stock&#34; dalla tabella (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) unita in join in [saleID].
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
