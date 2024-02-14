---
title: Table.Group
---

# Table.Group


Группирует в таблице строки, содержащие одинаковый ключ.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Группирует строки в <code>table</code> по ключевым столбцам, определенным с помощью <code>key</code>. <code>key</code> может быть именем одного столбца или списком имен столбцов.    Для каждой группы создается запись, содержащая ключевые столбцы (и их значения) вместе со всеми агрегированными столбцами, заданными с помощью <code>aggregatedColumns</code>.    Можно также указать <code>groupKind</code> и <code>comparer</code>.<br />    <br />    Если данные уже отсортированы по ключевым столбцам, можно указать <code>groupKind</code> для GroupKind.Local. Это может повысить производительность группирования в определенных случаях,    так как все строки с заданным набором ключевых значений считаются непрерывными.<br />    <br />    При передаче <code>comparer</code> обратите внимание, что если разные ключи считаются равными, строка может быть помещена в группу, ключи которой отличаются от ее собственных ключей.<br />    <br />    Эта функция не гарантирует порядок возвращаемых строк.  


## Examples

### Example #1 
Группирование таблицы, путем добавления столбца групповой операции [total] с суммой цен (each List.Sum([price])).
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
