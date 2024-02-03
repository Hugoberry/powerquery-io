---
title: Table.Range
---

# Table.Range


## Description

Повертає початок рядків із вказаним зсувом.


## Syntax

```powerquery
Table.Range(
    table as table,
    offset as number,
    optional count as number
) as table
```


## Details

Повертає рядки з початку <code>table</code> із вказаним <code>offset</code>. Додатковий параметр, <code>count</code>, визначає кількість рядків для повернення. За замовчуванням повертаються усі рядки після зсуву.


## Examples

### Example #1 
Повернути всі рядки, що починаються в позиції зсуву 1 у таблиці.
```powerquery
Table.Range(
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
Повернути рядок, що починається в позиції зсуву 1 у таблиці.
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]})
```




## Category
Table.Row operations
