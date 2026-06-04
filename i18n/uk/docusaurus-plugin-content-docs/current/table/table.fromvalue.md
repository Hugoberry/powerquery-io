---
title: Table.FromValue
---

# Table.FromValue


Створює таблицю зі стовпцем із вказаних значень.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Створює таблицю зі стовпцем, що містить вказане значення або список значень (`value`). Можна вказати додатковий параметр запису `options`, щоб керувати описаними нижче параметрами.

-   `DefaultColumnName` : назва стовпця, що використовується під час створення таблиці зі списку або скалярного значення.


## Examples

### Example #1
Створити таблицю зі значення 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
Створити таблицю зі списку.
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
Створення таблиці зі значення 1 із користувацькою назвою стовпця.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
