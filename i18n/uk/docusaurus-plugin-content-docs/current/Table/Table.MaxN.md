---
title: Table.MaxN
---

# Table.MaxN


## Description

Повертає найбільші рядки за даним критерієм.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Повертає найбільші рядки в таблиці (<code>table</code>) за такої умови: <code>comparisonCriteria</code>.    Після сортування рядків необхідно вказати значення параметра <code>countOrCondition</code>, щоб забезпечити подальше фільтрування результату. Зверніть увагу: алгоритм сортування не може забезпечувати постійно однаковий результат сортування. Параметр <code>countOrCondition</code> може мати кілька форм.    <ul>        <li> Якщо вказано число, функція повертає список з упорядкованими за зростанням елементами кількістю до <code>countOrCondition</code>. </li>        <li> Якщо вказано умову, функція повертає список елементів, які спочатку відповідають цій умові. Щойно виявиться невідповідність елемента умові, наступні елементи не розглядаються. </li> </ul>


## Examples

### Example #1 
Знайти в таблиці рядок із найбільшим значенням у стовпці [a] за умови, що [a] &gt; 0. Рядки сортуються перед застосуванням фільтра.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2 
Знайти в таблиці рядок із найбільшим значенням у стовпці [a] за умови, що [b] &gt; 0. Рядки сортуються перед застосуванням фільтра.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
