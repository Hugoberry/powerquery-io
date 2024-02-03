---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

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


## Details

Spojí řádky tabulky <code>table1</code> s řádky tabulky <code>table2</code> na základě rovnosti hodnot klíčových sloupců vybraných funkcí <code>key1</code> (pro tabulku <code>table1</code>) a <code>key2</code> (pro tabulku <code>table2</code>). Výsledky jsou vloženy do sloupce <code>newColumnName</code>.Tato funkce se chová podobně jako funkce Table.Join hodnotou argumentu JoinKind LeftOuter, ale výsledky spojení jsou prezentovány ve vnořeném, nikoliv plochém formátu.


## Examples

### Example #1 
Přidá sloupec spojení do tabulky (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) s názvem &#34;price/stock&#34; z tabulky (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) spojené na základě sloupce [saleID].
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
