---
title: Table.MinN
---

# Table.MinN


Көрсетілген шарттарды пайдаланып ең кіші жол(дар)ды қайтарады.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

`comparisonCriteria` берілген, `table` ішіндегі ең кіші жол(дар)ды қайтарады. Жолдар сұрыпталғаннан кейін нәтижені одан әрі сүзу үшін `countOrCondition` параметрін көрсету керек. Сұрыптау алгоритмі түзетілген сұрыпталған нәтижеге кепілдік бере алмайтынын ескеріңіз.`countOrCondition` параметрі бірнеше түрді қабылдай алады:

-   Егер сан көрсетілсе, арту ретімен `countOrCondition` дейінгі элементтер тізімі қайтарылады.
-   Егер шарт көрсетілген болса, басында шартқа сай болған элементтер тізімі қайтарылады. Бір элемент шартқа сай болмаса, басқа ешбір элементтер қарастырылмайды.


## Examples

### Example #1
Кестеде \[a\] &lt; 3 шарты бар \[a\] бағанында ең кіші мән бар жолды анықтау. Сүзгі қолданылмай тұрып жолдар сұрыпталады.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2
Кестеде \[b\] &lt; 0 шарты бар \[a\] бағанында ең кіші мән бар жолды анықтау. Сүзгі қолданылмай тұрып жолдар сұрыпталады.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
