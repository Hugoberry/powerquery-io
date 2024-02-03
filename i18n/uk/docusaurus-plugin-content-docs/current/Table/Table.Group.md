---
title: Table.Group
---

# Table.Group


## Description

Згруповує рядки таблиці, що містять однаковий ключ.


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


## Details

Групує рядки <code>table</code> за ключовими стовпцями, визначеними <code>key</code>. Значенням <code>key</code> може бути одне ім’я стовпця або список імен стовпців.    Для кожної групи складається запис із ключовими стовпцями (і їхніми значеннями), а також усіма агрегованими стовпцями, визначеними <code>aggregatedColumns</code>.    Додатково можна вказати <code>groupKind</code> і <code>comparer</code>.<br />    <br />    Якщо дані вже відсортовано за ключовими стовпцями, можна застосувати <code>groupKind</code> GroupKind.Local. У певних випадках це може збільшити продуктивність групування,    оскільки всі рядки із заданим набором ключових значень вважаються суцільними.<br />    <br />    Під час передавання <code>comparer</code>, зверніть увагу, що якщо різні ключі розглядаються як рівні, рядок може бути розміщено в групі, ключі в якій відрізняються від його власних.<br />    <br />    Ця функція не гарантує впорядкування рядків, які вона повертає.  


## Examples

### Example #1 
Згрупувати таблицю з додаванням сукупного стовпця [total], що міститиме суму цін (&#34;each List.Sum([price])&#34;).
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
