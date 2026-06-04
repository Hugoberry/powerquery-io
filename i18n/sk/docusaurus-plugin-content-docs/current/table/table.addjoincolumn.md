---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Vykoná spojenie medzi tabuľkami na zadaných stĺpcoch a vytvorí výsledok spojenia v novom stĺpci.


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

Spojí riadky tabuľky `table1` s riadkami tabuľky `table2` na základe rovnosti hodnôt kľúčových stĺpcov vybratých pomocou funkcie `key1` (pre tabuľku `table1`) a `key2` (pre tabuľku `table2`). Výsledky sa zadajú do stĺpca s názvom `newColumnName`. Táto funkcia sa správa podobne ako funkcia Table.Join s druhom JoinKind spojenia LeftOuter okrem toho, že výsledky spojenia sa znázornia vnoreným spôsobom namiesto spôsobu zjednodušenia štruktúry.


## Examples

### Example #1
Pridajte stĺpec spojenia do tabuľky (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) s názvom "price/stock" z tabuľky (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) spojenej na základe kľúča \[saleID\].
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
