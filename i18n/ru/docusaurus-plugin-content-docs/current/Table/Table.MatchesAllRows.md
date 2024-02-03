---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

Указывает, все строки ли в таблице соответствуют заданному условию.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

Указывает, все ли строки в <code>table</code> соответствуют заданному <code>condition</code>. Возвращает <code>true</code>, если все строки соответствуют условию, <code>false</code> - в противном случае.


## Examples

### Example #1 
Определение, все ли значения строк в столбце [a] в таблице являются четными.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2 
Определить, все ли значения строк равны [a = 1, b = 2], в таблице &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
