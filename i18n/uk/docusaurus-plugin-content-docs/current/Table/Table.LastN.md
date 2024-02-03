---
title: Table.LastN
---

# Table.LastN


## Description

Повертає вказану кількість останніх рядків.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Повертає позицію останніх рядків таблиці <code>table</code> в залежності від значення <code>countOrCondition</code>:    <ul>    <li> Якщо <code>countOrCondition</code> є числом, буде повернено таку кількість рядків, починаючи з позиції (кінцева - <code>countOrCondition</code>). </li>    <li> Якщо <code>countOrCondition</code> є умовою, у положення за зростанням буде повернено рядки, що відповідають цій умові, до того рядка, який не відповідатиме цій умові.</li></ul>


## Examples

### Example #1 
Знайти останні два рядки таблиці.
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
Знайти в таблиці останні рядки, для яких виконується умова [a] &gt; 0.
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
