---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Повертає позицію або позиції будь-якого із вказаних рядків у таблиці.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

Повертає позиції з таблиці <code>table</code>, де вперше зустрічаються рядки списку <code>rows</code>. Повертає -1, якщо екземплярів не знайдено.    <ul>    <li><code>table</code>: вхідна таблиця.</li>       <li><code>rows</code>:  список рядків таблиці, позиції яких слід знайти.</li>       <li><code>occurrence</code>: <i>[необов’язково]</i> визначає, які екземпляри рядка слід повернути.</li>       <li><code>equationCriteria</code>: <i>[необов’язково]</i> керує порівнянням рядків таблиці.</li>    </ul>    


## Examples

### Example #1 
Знайти позицію першого входження [a = 2, b = 4] або [a = 6, b = 8] у таблиці &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2 
Знайти позиції всіх входжень [a = 2, b = 4] або [a = 6, b = 8] у таблиці &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
