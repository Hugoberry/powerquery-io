---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Повертає позицію або позиції рядка в таблиці.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Details

Повертає позицію, у якій рядок <code>row</code> зустрічається вперше в зазначеній таблиці <code>table</code>. Повертає -1, якщо екземпляр не знайдено.    <ul>       <li><code>table</code>: вхідна таблиця.</li>       <li><code>row</code>: рядок таблиці, позицію якого слід знайти.</li>       <li><code>occurrence</code>: <i>[необов’язково]</i> визначає, які екземпляри рядка слід повернути.</li>       <li><code>equationCriteria</code>: <i>[необов’язково]</i> керує порівнянням рядків таблиці.</li>    </ul>    


## Examples

### Example #1 
Знайти позицію першого входження [a = 2, b = 4] у таблиці &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2 
Знайти позицію другого входження [a = 2, b = 4] у таблиці &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3 
Знайти позиції всіх входжень [a = 2, b = 4] у таблиці &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
