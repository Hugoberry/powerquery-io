---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Označuje, ali so vsi navedeni zapisi prikazani kot vrstice v tabeli.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Označuje, ali so vsi navedeni zapisi na seznamu zapisov <code>rows</code> prikazani kot vrstice v <code>table</code>.    Določite lahko izbirni parameter <code>equationCriteria</code> za nadzor primerjave med vrsticami tabele.


## Examples

### Example #1 
Ugotovite, ali tabela vsebuje vse vrstice, tako, da primerjate samo stolpec [CustomerID].
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
Ugotovite, ali tabela vsebuje vse vrstice.
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
