---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

Выполняет соединения таблиц по указанным столбцам и выводит результат соединения в новом столбце.


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

Соединяет строки таблицы <code>table1</code> со строками таблицы <code>table2</code> с учетом тождественности значений ключевых столбцов, выбранных в <code>key1</code> (для <code>table1</code>) и в <code>key2</code> (для <code>table2</code>). Результаты записываются в столбец с именем <code>newColumnName</code>.Эта функция работает подобно Table.Join с JoinKind из LeftOuter, за тем исключением, что результаты соединения представлены во вложенном виде, а не преобразованными в плоскую структуру.


## Examples

### Example #1 
Добавить столбец соединения для (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) с именем &#34;цена-наличие&#34; из таблицы (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}), соединенный по [saleID].
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
