---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Указывает, соответствует ли какая-либо строка в таблице заданному условию.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Указывает, есть ли в <code>table</code> строка, соответствующая заданному <code>condition</code>. Возвращает <code>true</code>, если хотя бы одна строка соответствует условию, <code>false</code> - в противном случае.


## Examples

### Example #1 
Определить, является ли хотя бы одно из значений строк в столбце [a] в таблице &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; четным.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2 
Определить, имеется ли хотя бы одно значение строк [a = 1, b = 2] в таблице &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
