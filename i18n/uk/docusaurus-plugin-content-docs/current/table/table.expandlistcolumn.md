---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Маючи стовпець списків у таблиці, створити копію рядка для кожного значення у списку.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Заданий `table`, у якому `column` містить список значень, розділяє список на рядок для кожного значення. Значення в інших стовпцях дублюються в кожному новому створеному рядку. Ця функція також може розгортати вкладені таблиці, розглядаючи їх як списки записів.


## Examples

### Example #1
Розділити стовпець списку \[Name\].
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```


### Example #2
Розділити стовпець вкладеної таблиці \[Components\].
```powerquery
Table.ExpandListColumn(
    #table(
        {"Part", "Components"},
        {
            {"Tool", #table({"Name", "Quantity"}, {{"Thingamajig", 2}, {"Widget", 3}})}
        }
    ),
    "Components"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Part = "Tool", Components = [Name = "Thingamajig", Quantity = 2]],
    [Part = "Tool", Components = [Name = "Widget", Quantity = 3]]
})
```




## Category
Table.Transformation
