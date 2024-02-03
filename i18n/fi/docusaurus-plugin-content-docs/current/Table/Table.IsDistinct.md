---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Ilmaisee, sisältääkö taulukko erillisiä rivejä (ei kaksoiskappaleita).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Ilmaisee, sisältääkö <code>table</code> erillisiä rivejä (ei kaksoiskappaleita). Palauttaa arvon <code>true</code>, jos rivit ovat erilliset, ja muussa tapauksessa arvon <code>false</code>.    Valinnainen parametri <code>comparisonCriteria</code> määrittää, mitkä taulukon sarakkeet testataan kaksoiskappaleiden varalta. Jos <code>comparisonCriteria</code> ei ole määritettynä, kaikki sarakkeet testataan.


## Examples

### Example #1 
Selvitä, onko taulukko erillinen.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
Selvitä, onko taulukko erillinen sarakkeessa.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
