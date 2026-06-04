---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Кестедегі жолдардың кез келгенінің көрсетілген шартқа сай екендігін көрсетеді.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

`table` ішіндегі жолдардың кез келгенінің көрсетілген `condition` сай екендігін көрсетеді. Жолдардың кез келгені сай болса, `true` мәнін, олай болмаса `false` мәнін қайтарады.


## Examples

### Example #1
`({[a = 2, b = 4], [a = 6, b = 8]})` кестесінде \[a\] бағанындағы жол мәндерінің кез келгенінің жұп екендігін анықтау.
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
`({[a = 1, b = 2], [a = 3, b = 4]})` кестесіндегі жол мәндерінің кез келгенінің \[a = 1, b = 2\] болатынын анықтау.
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
