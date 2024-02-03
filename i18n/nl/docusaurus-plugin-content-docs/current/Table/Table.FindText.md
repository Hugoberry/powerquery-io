---
title: Table.FindText
---

# Table.FindText


## Description

Retourneert uit de tabel alle rijen die de opgegeven tekst bevatten.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Retourneert uit de tabel <code>table</code> de rijen die de opgegeven tekst <code>text</code> bevatten. Als de tekst niet wordt gevonden, wordt er een lege tabel geretourneerd.


## Examples

### Example #1 
De rijen in de tabel zoeken die Bob bevatten.
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
