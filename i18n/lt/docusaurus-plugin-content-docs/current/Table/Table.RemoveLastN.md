---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Pateikiama lentelė, kurios paskutinės N eilutės pašalintos.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Pateikiama lentelė, kurioje nėra paskutinių <code>countOrCondition</code> lentelės <code>table</code> eilučių.        Pašalintų eilučių skaičius priklauso nuo pasirenkamo parametro <code>countOrCondition</code>.    <ul>    <li> Jei praleidžiama <code>countOrCondition</code>, pašalinama tik paskutinė eilutė. </li>    <li> Jei <code>countOrCondition</code> yra skaičius, bus pašalintas toks skaičius eilučių (pradedant nuo apačios). </li>    <li> Jei <code>countOrCondition</code> yra sąlyga, bus pašalintos ją atitinkančios eilutės iki eilutės, kuri sąlygos neatitiks.</li>    </ul>


## Examples

### Example #1 
Pašalinkite paskutinę lentelės eilutę.
```powerquery
Table.RemoveLastN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Pašalinkite paskutines lentelės eilutes, atitinkančias sąlygą [CustomerID] &gt; 2.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
