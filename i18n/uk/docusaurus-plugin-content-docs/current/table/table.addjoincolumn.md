---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Виконує об’єднання зазначених стовпців між таблицями та створює результат об’єднання в новому стовпці.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

Об'єднує рядки `table1` з рядками `table2` на основі рівності значень ключових стовпців, обраних `key1` (для `table1`) та `key2` (для `table2`). Результати заносяться в стовпець з іменем `newColumnName`. Ця функція поводиться аналогічно до Table.Join з JoinKind of LeftOuter, за винятком того, що об'єднані результати представлені у вкладений спосіб, а не у вигляді рядка.


## Examples

### Example #1
Додати стовпець об'єднання до (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) з іменем "ціна/товар" із таблиці (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) в об'єднаний стовпець \[saleID\].
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
