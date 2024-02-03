---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Бірінші санақ жолдары өткізіп жіберілген кестені қайтарады.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

<code>table</code> кестесінің <code>countOrCondition</code> бірінші көрсетілген жолдар санын қамтымайтын кестені қайтарады.    Жойылатын жолдар саны <code>countOrCondition</code> міндетті емес параметріне байланысты.    <ul>    <li> Егер <code>countOrCondition</code> көрсетілмесе, тек бірінші жол жойылады. </li>    <li> Егер <code>countOrCondition</code> сан болса, сонша жол (жоғарғы жағынан бастап) жойылады. </li>    <li> Егер <code>countOrCondition</code> шарт болса, жол шартқа сай емес болғанша шартқа сай жолдар жойылады.</li>    </ul>


## Examples

### Example #1 
Кестенің бірінші жолын жою.
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
Кестенің бірінші екі жолын жою.
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
Кестенің [CustomerID] &lt;=2 шарты орындалатын бірінші жолдарын жою.
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
