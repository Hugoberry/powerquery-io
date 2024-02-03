---
title: Table.FindText
---

# Table.FindText


## Description

A rendszer az összes olyan sort visszaadja, amelyek tartalmazzák az adott szöveget a táblában.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Azokat a sorokat adja vissza a(z) <code>table</code> táblából, melyek tartalmazzák a(z) <code>text</code> szöveget. Ha a szöveg nem található, egy üres táblát ad vissza.


## Examples

### Example #1 
Megkeresi a tábla azon sorait, amelyek tartalmazzák a „Bob” kifejezést.
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
