---
title: Table.FromRows
---

# Table.FromRows


Створює таблицю зі списку значень рядків і додаткових стовпців.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Створює таблицю зі списку "`rows`", кожен елемент якого – це внутрішній список, що містить значення стовпців для одного рядка. Додатково як другий аргумент (`columns`) можна вказати список імен стовпців, тип таблиці або кількість стовпців.


## Examples

### Example #1
Повернути таблицю, що містить стовпець \[CustomerID\] зі значеннями \{1, 2\}, стовпець \[Name\] зі значеннями \{"Bob", "Jim"\} і стовпець \[Phone\] зі значеннями \{"123-4567", "987-6543"\}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
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
Повернути таблицю, що містить стовпець \[CustomerID\] зі значеннями \{1, 2\}, стовпець \[Name\] зі значеннями \{"Bob", "Jim"\} і стовпець \[Phone\] зі значеннями \{"123-4567", "987-6543"\}, де \[CustomerID\] – це числові значення, а \[Name\] та \[Phone\] – текстові.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
