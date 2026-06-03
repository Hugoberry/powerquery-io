---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Получив исходный столбец списков в таблице, создать копию строки для каждого значения в списке.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

С учетом`table`, где `column` содержит список значений, разбивая список на строку для каждого значения. Значения в других столбцах повторяются в каждой созданной строке. Эта функция также может расширять вложенные таблицы, рассматривая их как списки записей.


## Examples

### Example #1
Разделить столбец списка \[Имя\].
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
Разделение столбца вложенной таблицы \[Компоненты\].
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
