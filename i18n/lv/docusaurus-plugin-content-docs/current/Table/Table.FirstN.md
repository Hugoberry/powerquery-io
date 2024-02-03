---
title: Table.FirstN
---

# Table.FirstN


## Description

Tiek atgrieztas norādītās pirmās skaita rindas.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Tiek atgriezta tabulas <code>table</code> pirmā(-s) rinda(-s) atkarībā no <code>countOrCondition</code> vērtības:    <ul>    <li> Ja <code>countOrCondition</code> ir skaitlis, tiks atgriezts tik daudz rindu (sākot no augšas). </li>    <li> Ja <code>countOrCondition</code> ir nosacījums, tiks atgrieztas nosacījumam atbilstošās rindas, līdz rinda neatbilst nosacījumam.</li></ul>


## Examples

### Example #1 
Atrodiet tabulas pirmās divas rindas.
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Atrodiet tabulā pirmo rindu, kur [a] &gt; 0.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
