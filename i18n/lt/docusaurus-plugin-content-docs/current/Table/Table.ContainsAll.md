---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Nurodoma, ar visi nurodyti įrašai lentelėje rodomi kaip eilutė.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Nurodoma, ar visi nurodyti įrašai įrašų sąraše <code>rows</code> rodomi kaip eilutės <code>table</code>.    Galima nurodyti pasirenkamą parametrą <code>equationCriteria</code>, norint valdyti lentelės eilučių palyginimą.


## Examples

### Example #1 
Nustatykite, ar lentelėje yra visos eilutės, lygindami tik stulpelį [CustomerID].
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
Nustatykite, ar lentelėje yra visos eilutės.
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
