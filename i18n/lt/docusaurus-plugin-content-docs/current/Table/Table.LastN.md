---
title: Table.LastN
---

# Table.LastN


## Description

Pateikiamas paskutinis nurodytas eilučių skaičius.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Pateikiama (-os) paskutinė (-ės) eilutė (-ės) iš lentelės, <code>table</code>, priklausomai nuo reikšmės <code>countOrCondition</code>.    <ul>    <li> Jei <code>countOrCondition</code> yra skaičius, bus pateiktas toks skaičius eilučių, pradedant nuo padėties (pabaiga – <code>countOrCondition</code>). </li>    <li> Jei <code>countOrCondition</code> yra sąlyga, bus pateiktos ją atitinkančios eilutės didėjančios padėties tvarka iki eilutės, kuri sąlygos neatitiks.</li></ul>


## Examples

### Example #1 
Raskite paskutines dvi lentelės eilutes.
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Raskite paskutines eilutes, kur [a] &gt; 0, lentelėje.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
