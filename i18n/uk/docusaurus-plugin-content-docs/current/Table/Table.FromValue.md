---
title: Table.FromValue
---

# Table.FromValue


## Description

Створює таблицю зі стовпцем із вказаних значень.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Створює таблицю зі стовпцем, що містить вказане значення або список значень (<code>value</code>). Можна вказати додатковий параметр запису "<code>options</code>", щоб керувати такими параметрами:    <ul>    <li> <code>DefaultColumnName</code>. Назва стовпця, що використовується під час створення таблиці зі списку або скалярного значення.</li>    </ul>  


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
