---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Кестедегі жолдардың кез келгенінің көрсетілген шартқа сай екендігін көрсетеді.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

<code>table</code> ішіндегі жолдардың кез келгенінің көрсетілген <code>condition</code> сай екендігін көрсетеді. Жолдардың кез келгені сай болса, <code>true</code> мәнін, олай болмаса <code>false</code> мәнін қайтарады.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; кестесінде [a] бағанындағы жол мәндерінің кез келгенінің жұп екендігін анықтау.
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
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; кестесіндегі жол мәндерінің кез келгенінің [a = 1, b = 2] болатынын анықтау.
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
