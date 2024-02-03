---
title: Table.Partition
---

# Table.Partition


## Description

Розділяє таблицю на список таблиць залежно від вказаної кількості груп і стовпців.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Details

Розділяє <code>table</code> на список <code>groups</code> таблиць залежно від значення <code>column</code> і функції <code>hash</code>.    Функція <code>hash</code> застосовується до значення рядка <code>column</code> для отримання значення геша цього рядка. Модуль значення геша <code>groups</code> визначає, у якій з повернених таблиць буде розташовано рядок.    <ul>       <li><code>table</code>: Таблиця для розділення.</li>       <li><code>column</code>: Стовпець для гешування для визначення таблиці, у яку буде повернено рядок.</li>       <li><code>groups</code>: Кількість таблиць, на які буде розділено вхідну таблицю.</li>       <li><code>hash</code>: Функція для отримання значення геша.</li>    </ul>  


## Examples

### Example #1 
Розділити таблицю &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; на 2 таблиці по стовпцю [a], використовуючи значення стовпців як геш-функцію.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
