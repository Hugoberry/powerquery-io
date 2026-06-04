---
title: Table.ContainsAny
---

# Table.ContainsAny


Көрсетілген жазбалардың кез келгені кестеде жолдар ретінде пайда болатынын көрсетеді.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

`rows` жазбалар тізіміндегі көрсетілген жазбалардың кез келгені `table` ішінде жолдар ретінде пайда болатынын көрсетеді. Кестенің жолдарын салыстыруды басқару үшін `equationCriteria` міндетті емес параметрін көрсетуге болады.


## Examples

### Example #1
`({[a = 1, b = 2], [a = 3, b = 4]})` кестесі `[a = 1, b = 2]` немесе `[a = 3, b = 5]` жолын қамтитынын анықтау.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
`({[a = 1, b = 2], [a = 3, b = 4]})` кестесі `[a = 1, b = 3]` немесе `[a = 3, b = 5]` жолын қамтитынын анықтау.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Тек \[a\] бағанын салыстырып, `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` кестесі `[a = 1, b = 3]` немесе `[a = 3, b = 5]` жолын қамтитынын анықтау.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
