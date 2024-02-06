---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Возвращает позиции любой из указанных строк в таблице.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Возвращает позиции строк из <code>table</code> от первого вхождения в списке <code>rows</code>. Возвращает значение –1, если вхождение не найдено.    <ul>    <li><code>table</code>: входная таблица.</li>       <li><code>rows</code>:  список строк в таблице для поиска позиций.</li>       <li><code>occurrence</code>: <i>[необязательно]</i> указывает, какие вхождения строки возвращать.</li>       <li><code>equationCriteria</code>: <i>[необязательно]</i> управляет сравнением строк таблицы.</li>    </ul>    


## Examples

### Example #1 
Найти позицию первого вхождения [a = 2, b = 4] или [a = 6, b = 8] в таблице &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Найти позиции всех вхождений [a = 2, b = 4] или [a = 6, b = 8] в таблице &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
