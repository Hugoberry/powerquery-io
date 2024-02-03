---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

Suorittaa liitoksen taulukoiden välillä annetuille sarakkeille ja tuo liitostuloksen uuteen sarakkeeseen.


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

Liittää kohteen <code>table1</code> rivit ja kohteen <code>table2</code> rivit yhteen perustuen kohteen <code>key1</code> (kohteelle <code>table1</code>) ja <code>key2</code> (kohteelle <code>table2</code>) valitsemien avainsarakkeiden arvojen samanlaisuuden perusteella. Tulokset lisätään sarakkeeseen nimeltä <code>newColumnName</code>.Tämä funktio toimii samankaltaisesti kuin Table.Join ja LeftOuter-kohteen JoinKind lukuun ottamatta sitä, että liitostulokset esitetään sisäkkäisinä litteinä esittämisen sijaan.


## Examples

### Example #1 
Lisää kohteeseen (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) liitossarakkeen nimeltä &#34;price/stock&#34; taulukosta (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) liitettynä kohteeseen [saleID].
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
