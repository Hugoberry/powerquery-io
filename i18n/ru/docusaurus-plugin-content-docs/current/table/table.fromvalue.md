---
title: Table.FromValue
---

# Table.FromValue


Создает таблицу со столбцом из указанных значений.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Создает таблицу со столбцом, содержащим предоставленное значение или список значений, `value`. Можно указать необязательный параметр записи, `options`, для управления следующими вариантами:

-   `DefaultColumnName`: имя столбца, используемое при создании таблицы из списка или скалярного значения.


## Examples

### Example #1
Создать таблицу из значения 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
Создание таблицы из списка.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3
Создать из значения 1 таблицу с настраиваемым именем столбца.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
