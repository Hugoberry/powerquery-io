---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


Pateikiama lentelė su praleistomis pirmosiomis eilutėmis pagal eilę.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Pateikiama lentelė, kurioje nėra pirmojo nurodyto lentelės `countOrCondition` eilučių skaičiaus `table`. Pašalintų eilučių skaičius priklauso nuo pasirenkamo parametro `countOrCondition`.

-   Jei praleidžiama `countOrCondition`, pašalinama tik pirmoji eilutė.
-   Jei `countOrCondition` yra skaičius, bus pašalintas toks skaičius eilučių (pradedant nuo viršaus).
-   Jei `countOrCondition` yra sąlyga, bus pašalintos ją atitinkančios eilutės iki eilutės, kuri sąlygos neatitiks.


## Examples

### Example #1
Pašalinkite pirmąją lentelės eilutę.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2
Pašalinkite pirmąsias dvi lentelės eilutes.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3
Pašalinkite pirmąsias lentelės eilutes, atitinkančias sąlygą \[CustomerID\] &lt;= 2.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
