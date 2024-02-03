---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Značí, zda se mají všechny zadané záznamy zobrazovat jako řádky tabulky.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Značí, zda se mají všechny zadané záznamy v seznamu záznamů <code>rows</code> zobrazovat jako řádky tabulky <code>table</code>.    Za účelem řízení porovnání mezi řádky tabulky může být určen volitelný parametr <code>equationCriteria</code>.


## Examples

### Example #1 
Určí, jestli tabulka obsahuje všechny řádky, porovnáním pouze se sloupcem [CustomerID].
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
Určí, jestli tabulka obsahuje všechny řádky.
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
