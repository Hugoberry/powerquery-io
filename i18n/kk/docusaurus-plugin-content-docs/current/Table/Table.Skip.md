---
title: Table.Skip
---

# Table.Skip


## Description

Бірінші санақ жолдары өткізіп жіберілген кестені қайтарады.


## Syntax

```powerquery
Table.Skip(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

<code>table</code> кестесінің <code>countOrCondition</code> бірінші көрсетілген жолдар санын қамтымайтын кестені қайтарады.    Өткізіп жіберілетін жолдар саны <code>countOrCondition</code> міндетті емес параметріне байланысты.    <ul>    <li> Егер <code>countOrCondition</code> көрсетілмесе, тек бірінші жол өткізіп жіберіледі. </li>    <li> Егер <code>countOrCondition</code> сан болса, сонша жол (жоғарғы жағынан бастап) өткізіп жіберіледі. </li>    <li> Егер <code>countOrCondition</code> шарт болса, жол шартқа сай емес болғанша шартқа сай жолдар өткізіп жіберіледі.</li>    </ul>


## Examples

### Example #1 
Кестенің бірінші жолын өткізіп жіберу.
```powerquery
Table.Skip(
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
Кестенің бірінші екі жолын өткізіп жіберу.
```powerquery
Table.Skip(
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
Кестенің [Price] &gt; 25 шарты орындалатын бірінші жолдарын өткізіп жіберу.
```powerquery
Table.Skip(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0],
        [OrderID = 4, CustomerID = 3, Item = "Fish tazer", Price = 200.0],
        [OrderID = 5, CustomerID = 3, Item = "Bandaids", Price = 2.0],
        [OrderID = 6, CustomerID = 1, Item = "Tackle box", Price = 20.0],
        [OrderID = 7, CustomerID = 5, Item = "Bait", Price = 3.25],
        [OrderID = 8, CustomerID = 5, Item = "Fishing Rod", Price = 100.0],
        [OrderID = 9, CustomerID = 6, Item = "Bait", Price = 3.25]
    }),
    each [Price] > 25
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25],
    [OrderID = 4, CustomerID = 3, Item = "Fish tazer", Price = 200],
    [OrderID = 5, CustomerID = 3, Item = "Bandaids", Price = 2],
    [OrderID = 6, CustomerID = 1, Item = "Tackle box", Price = 20],
    [OrderID = 7, CustomerID = 5, Item = "Bait", Price = 3.25],
    [OrderID = 8, CustomerID = 5, Item = "Fishing Rod", Price = 100],
    [OrderID = 9, CustomerID = 6, Item = "Bait", Price = 3.25]
})
```




## Category
Table.Row operations
