---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

Кестедегі барлық жолдардың көрсетілген шартқа сай екендігін көрсетеді.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

<code>table</code> ішіндегі барлық жолдардың көрсетілген <code>condition</code> сай екендігін көрсетеді. Барлық жолдар сай болса, <code>true</code> мәнін, олай болмаса <code>false</code> мәнін қайтарады.


## Examples

### Example #1 
Кестеде [a] бағанындағы барлық жол мәндерінің жұп екенін анықтау.
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
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; кестесінде барлық жол мәндерінің [a = 1, b = 2] болатынын анықтау.
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
