---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Ilmaisee, näkyvätkö kaikki määritetyt tietueet taulukon riveinä.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Ilmaisee, näkyvätkö kaikki tietueluettelon <code>rows</code> määritetyt tietueet kohteen <code>table</code> riveinä.    Valinnainen parametri <code>equationCriteria</code> voidaan määrittää ohjaamaan taulukon rivien välistä vertailua.


## Examples

### Example #1 
Selvitä, sisältääkö taulukko kaikki rivit, vertaamalla ainoastaan saraketta [CustomerID].
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Selvitä, sisältääkö taulukko kaikki rivit.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
