---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


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


## Remarks

Unisce in join le righe di `table1` con le righe `table2` in base all'uguaglianza dei valori delle colonne chiave selezionate da `key1` (per `table1`) e da `key2` (per `table2`). I risultati sono inseriti nella colonna denominata `newColumnName`. Il comportamento di questa funzione è analogo a Table.Join con JoinKind di LeftOuter, salvo che i risultati del join sono presentati in modalità annidata anziché flat.


## Examples

### Example #1
Aggiungere una colonna di join a (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) denominata "price/stock" dalla tabella (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) unita in join in \[saleID\].
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
