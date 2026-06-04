---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Кестедегі барлық жолдардың көрсетілген шартқа сай екендігін көрсетеді.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

`table` ішіндегі барлық жолдардың көрсетілген `condition` сай екендігін көрсетеді. Барлық жолдар сай болса, `true` мәнін, олай болмаса `false` мәнін қайтарады.


## Examples

### Example #1
Кестеде \[a\] бағанындағы барлық жол мәндерінің жұп екенін анықтау.
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
`({[a = 1, b = 2], [a = 3, b = 4]})` кестесінде барлық жол мәндерінің \[a = 1, b = 2\] болатынын анықтау.
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
