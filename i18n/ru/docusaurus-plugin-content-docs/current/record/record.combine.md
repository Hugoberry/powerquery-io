---
title: Record.Combine
---

# Record.Combine


Объединяет записи в данном списке.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Объединяет записи в данном <code>records</code>. Если <code>records</code> содержит значения, отличные от записи, возвращается ошибка.


## Examples

### Example #1 
Создание комбинированной записи из записей.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
