---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Spojí určené sloupce tabulek a vytvoří výsledek spojení v novém sloupci.


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

Spojí řádky tabulky `table1` s řádky tabulky `table2` na základě rovnosti hodnot klíčových sloupců vybraných funkcí `key1` (pro tabulku `table1`) a `key2` (pro tabulku `table2`). Výsledky jsou vloženy do sloupce `newColumnName`. Tato funkce se chová podobně jako funkce Table.Join hodnotou argumentu JoinKind LeftOuter, ale výsledky spojení jsou prezentovány ve vnořeném, nikoliv plochém formátu.


## Examples

### Example #1
Přidá sloupec spojení do tabulky (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) s názvem "price/stock" z tabulky (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) spojené na základě sloupce \[saleID\].
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
