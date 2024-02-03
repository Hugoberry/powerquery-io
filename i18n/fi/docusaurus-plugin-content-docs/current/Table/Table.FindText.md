---
title: Table.FindText
---

# Table.FindText


## Description

Palauttaa kaikki rivit, jotka sisältävät annetun tekstin taulukossa.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Palauttaa taulukon <code>table</code> rivit, jotka sisältävät tekstin <code>text</code>. Jos tekstiä ei löydy, palautetaan tyhjä taulukko.


## Examples

### Example #1 
Etsi taulukon rivit, jotka sisältävät tekstin &#34;Bob&#34;.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
