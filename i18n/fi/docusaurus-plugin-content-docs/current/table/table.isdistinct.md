---
title: Table.IsDistinct
---

# Table.IsDistinct


Ilmaisee, sisältääkö taulukko erillisiä rivejä (ei kaksoiskappaleita).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Ilmaisee, sisältääkö `table` erillisiä rivejä (ei kaksoiskappaleita). Palauttaa arvon `true`, jos rivit ovat erilliset, ja muussa tapauksessa arvon `false`. Valinnainen parametri `comparisonCriteria` määrittää, mitkä taulukon sarakkeet testataan kaksoiskappaleiden varalta. Jos `comparisonCriteria` ei ole määritettynä, kaikki sarakkeet testataan.


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
