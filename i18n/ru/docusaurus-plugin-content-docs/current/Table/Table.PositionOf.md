---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Возвращает позиции строки в таблице.


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

Возвращает позицию строки первого вхождения <code>table</code> в указанной <code>row</code>. Возвращает значение –1, если вхождение не найдено.    <ul>       <li><code>table</code>: входная таблица.</li>       <li><code>row</code>: строка в таблице, позиция которой должна быть найдена.</li>       <li><code>occurrence</code>: <i>[необязательно]</i> указывает, какие вхождения строки возвращать.</li>       <li><code>equationCriteria</code>: <i>[необязательно]</i> управляет сравнением строк таблицы.</li>    </ul>    


## Examples

### Example #1 
Найти позицию первого вхождения [a = 2, b = 4] в таблице &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Найти позицию второго вхождения [a = 2, b = 4] в таблице &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Найти позиции всех вхождений [a = 2, b = 4] в таблице &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
