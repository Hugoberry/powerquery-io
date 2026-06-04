---
title: Table.Partition
---

# Table.Partition


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


## Remarks

Розділяє `table` на список `groups` таблиць залежно від значення `column` і функції `hash`. Функція `hash` застосовується до значення рядка `column` для отримання значення геша цього рядка. Модуль значення геша `groups` визначає, у якій з повернених таблиць буде розташовано рядок.

-   `table`: Таблиця для розділення.
-   `column`: Стовпець для гешування для визначення таблиці, у яку буде повернено рядок.
-   `groups`: Кількість таблиць, на які буде розділено вхідну таблицю.
-   `hash`: Функція для отримання значення геша.


## Examples

### Example #1
Розділити таблицю `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` на 2 таблиці по стовпцю \[a\], використовуючи значення стовпців як геш-функцію.
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
