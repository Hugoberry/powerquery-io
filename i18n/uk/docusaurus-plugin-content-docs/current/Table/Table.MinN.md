---
title: Table.MinN
---

# Table.MinN


## Description

Повертає найменші рядки за даним критерієм.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Повертає найменші рядки в таблиці (<code>table</code>) за такої умови: <code>comparisonCriteria</code>. Після сортування рядків необхідно вказати значення параметра "<code>countOrCondition</code>", щоб забезпечити подальше фільтрування результату. Зверніть увагу, алгоритм сортування може не забезпечувати постійно однаковий результат сортування. Параметр "<code>countOrCondition</code>" може мати кілька форм:    <ul>        <li> Якщо вказано число, функція повертає список, що містить таку кількість елементів, яка не перевищує значення параметра "<code>countOrCondition</code>", упорядкованих за зростанням. </li>        <li> Якщо вказано умову, функція повертає список елементів, які спочатку задовольняють цю умову. Щойно один елемент не задовольняє умову, наступні елементи не розглядаються. </li>  </ul>


## Examples

### Example #1 
Знайти в таблиці рядок із найменшим значенням у стовпці [a] за умови, що [a] &lt; 3. Рядки сортуються перед застосуванням фільтра.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Знайти в таблиці рядок із найменшим значенням у стовпці [a] за умови, що [b] &lt; 0. Рядки сортуються перед застосуванням фільтра.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
