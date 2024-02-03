---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Повертає таблицю з видаленими останніми N рядками.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Повертає таблицю, що містить зазначену кількість останніх рядків (<code>countOrCondition</code>), у таблиці <code>table</code>.        Кількість вилучених рядків залежить від додаткового параметра <code>countOrCondition</code>.    <ul>    <li> Якщо <code>countOrCondition</code> не зазначено, вилучається лише останній рядок. </li>    <li> Якщо <code>countOrCondition</code> – число, вилучається відповідна кількість рядків (починаючи знизу). </li>    <li> Якщо <code>countOrCondition</code> – умова, вилучаються рядки, що відповідають цій умові, до рядка, який їй не відповідає.</li>    </ul>


## Examples

### Example #1 
Видалити останній рядок таблиці.
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
Видалити з таблиці останні рядки, для яких виконується умова [CustomerID] &gt; 2.
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
