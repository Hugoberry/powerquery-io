---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Mengembalikan jadual baris kiraan pertama dilangkau.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Mengembalikan jadual yang tidak mengandungi bilangan baris pertama yang ditentukan <code>countOrCondition</code>, pada jadual <code>table</code>.     Bilangan baris yang dialih keluar bergantung pada parameter pilihan <code>countOrCondition</code>.     <ul>    <li> Jika <code>countOrCondition</code> dikecualikan hanya baris pertama dialih keluar. </li>    <li> Jika <code>countOrCondition</code> ialah nombor, baris sebanyak itu (bermula di atas) akan dialih keluar. </li>    <li> Jika <code>countOrCondition</code> ialah syarat, baris yang memenuhi syarat akan dialih keluar sehingga baris tidak memenuhi syarat.</li>    </ul>


## Examples

### Example #1 
Alih keluarkan baris pertama jadual.
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
Alih keluarkan dua baris pertama jadual.
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
Alih keluarkan baris pertama yang mana [CustomerID] &lt;=2 pada jadual.
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
