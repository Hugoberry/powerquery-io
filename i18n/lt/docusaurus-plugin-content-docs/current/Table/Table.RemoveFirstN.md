---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Pateikiama lentelė su praleistomis pirmosiomis eilutėmis pagal eilę.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Pateikiama lentelė, kurioje nėra pirmojo nurodyto lentelės <code>countOrCondition</code> eilučių skaičiaus <code>table</code>.    Pašalintų eilučių skaičius priklauso nuo pasirenkamo parametro <code>countOrCondition</code>.    <ul>    <li> Jei praleidžiama <code>countOrCondition</code>, pašalinama tik pirmoji eilutė. </li>    <li> Jei <code>countOrCondition</code> yra skaičius, bus pašalintas toks skaičius eilučių (pradedant nuo viršaus). </li>    <li> Jei <code>countOrCondition</code> yra sąlyga, bus pašalintos ją atitinkančios eilutės iki eilutės, kuri sąlygos neatitiks.</li>    </ul>


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
Pašalinkite pirmąsias lentelės eilutes, atitinkančias sąlygą [CustomerID] &lt;= 2.
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
