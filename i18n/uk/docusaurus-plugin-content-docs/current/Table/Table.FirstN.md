---
title: Table.FirstN
---

# Table.FirstN


## Description

Повертає перші визначені рядки.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Повертає позицію перших рядків таблиці <code>table</code> в залежності від значення <code>countOrCondition</code>:    <ul>    <li> Якщо <code>countOrCondition</code> є числом, буде повернено таку кількість рядків (починаючи зверху). </li>    <li> Якщо <code>countOrCondition</code> є умовою, буде повернено рядки, що відповідають цій умові, до того рядка, який не відповідатиме цій умові.</li></ul>


## Examples

### Example #1 
Знайти перші два рядки таблиці.
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
Знайти в таблиці перші рядки, для яких виконується умова [a] &gt; 0.
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
