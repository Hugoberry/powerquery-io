---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Ilmaisee, sisältääkö taulukko määritetyt sarakkeet.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Ilmaisee, sisältääkö <code>table</code> määritetyt sarakkeet <code>columns</code>. Palauttaa arvon <code>tosi</code>, jos taulukko sisältää sarakkeet, ja muussa tapauksessa arvon <code>epätosi</code>.


## Examples

### Example #1 
Selvitä, onko taulukossa sarake [Name].
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
true
```


### Example #2 
Selvitä, onko taulukossa sarakkeet [Name] ja [PhoneNumber].
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
