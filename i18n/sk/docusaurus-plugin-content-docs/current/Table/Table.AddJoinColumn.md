---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

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


## Details

Spojí riadky tabuľky <code>table1</code> s riadkami tabuľky <code>table2</code> na základe rovnosti hodnôt kľúčových stĺpcov vybratých pomocou funkcie <code>key1</code> (pre tabuľku <code>table1</code>) a <code>key2</code> (pre tabuľku <code>table2</code>). Výsledky sa zadajú do stĺpca s názvom <code>newColumnName</code>.Táto funkcia sa správa podobne ako funkcia Table.Join s druhom JoinKind spojenia LeftOuter okrem toho, že výsledky spojenia sa znázornia vnoreným spôsobom namiesto spôsobu zjednodušenia štruktúry.


## Examples

### Example #1 
Pridajte stĺpec spojenia do tabuľky (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) s názvom &#34;price/stock&#34; z tabuľky (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) spojenej na základe kľúča [saleID].
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
