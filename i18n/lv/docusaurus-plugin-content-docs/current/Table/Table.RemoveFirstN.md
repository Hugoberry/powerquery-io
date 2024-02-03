---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Tiek atgriezta tabula ar pirmajām izlaistajām skaita rindām.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Atgriež tabulu, kurā nav ietverts tabulas <code>table</code> pirmais norādītais rindu skaits <code>countOrCondition</code>.    Noņemto rindu skaits ir atkarīgs no neobligātā parametra <code>countOrCondition</code>.    <ul>    <li> Ja <code>countOrCondition</code> nav norādīts, tiek noņemta tikai pirmā rinda. </li>    <li> Ja <code>countOrCondition</code> ir skaitlis, tiek noņemts attiecīgais rindu skaits (sākot no augšas). </li>    <li> Ja <code>countOrCondition</code> ir nosacījums, tiek noņemtas nosacījumam atbilstošās rindas, līdz rinda neatbilst nosacījumam.</li>    </ul>


## Examples

### Example #1 
Noņemiet tabulas pirmo rindu.
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
Noņemiet tabulas pirmās divas rindas.
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
Noņemiet tabulas pirmās rindas, kur [CustomerID] &lt;=2.
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
