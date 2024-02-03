---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

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


## Details

Об'єднує рядки <code>table1</code> з рядками <code>table2</code> на основі рівності значень ключових стовпців, обраних <code>key1</code> (для <code>table1</code>) та <code>key2</code> (для <code>table2</code>). Результати заносяться в стовпець з іменем <code>newColumnName</code>.Ця функція поводиться аналогічно до Table.Join з JoinKind of LeftOuter, за винятком того, що об'єднані результати представлені у вкладений спосіб, а не у вигляді рядка.


## Examples

### Example #1 
Додати стовпець об&#39;єднання до (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) з іменем &#34;ціна/товар&#34; із таблиці (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) в об&#39;єднаний стовпець [saleID].
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
