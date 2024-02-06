---
title: Table.IsDistinct
---

# Table.IsDistinct


Указывает, содержит ли таблица только уникальные строки (без повторений).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Указывает, содержит ли "<code>table</code>" только уникальные строки (без повторений). Возвращает значение <code>true</code>, если строки уникальны, и <code>false</code> в противном случае.    Необязательный параметр "<code>comparisonCriteria</code>" определяет, какие столбцы таблицы проверяются на наличие повторов. Если "<code>comparisonCriteria</code>" не задан, проверяются все столбцы.


## Examples

### Example #1 
Определение, состоит ли таблица из уникальных строк.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
Определение, уникальны ли все строки таблицы в столбце.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
