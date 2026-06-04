---
title: Table.MaxN
---

# Table.MaxN


Көрсетілген шарттарды пайдаланып ең үлкен жол(дар)ды қайтарады.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

`comparisonCriteria` берілген, `table` ішінде ең үлкен жол(дар)ды қайтарады. Жолдар сұрыпталғаннан кейін нәтижені одан әрі сүзу үшін `countOrCondition` параметрін көрсету керек. Сұрыптау алгоритмі түзетілген сұрыпталған нәтижеге кепілдік бере алмайтынын ескеріңіз. `countOrCondition` параметрі бірнеше түрді қабылдай алады:

-   Егер сан көрсетілсе, арту ретімен `countOrCondition` дейінгі элементтер тізімі қайтарылады.
-   Егер шарт көрсетілген болса, басында шартқа сай болған элементтер тізімі қайтарылады. Бір элемент шартқа сай болмаса, басқа ешбір элементтер қарастырылмайды.


## Examples

### Example #1
Кестеде \[a\] > 0 шарты бар \[a\] бағанында ең үлкен мән бар жолды анықтау. Сүзгі қолданылмай тұрып жолдар сұрыпталады.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2
Кестеде \[b\] > 0 шарты бар \[a\] бағанында ең үлкен мән бар жолды анықтау. Сүзгі қолданылмай тұрып жолдар сұрыпталады.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
