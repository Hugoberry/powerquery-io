---
title: Table.MaxN
---

# Table.MaxN


## Description

Көрсетілген шарттарды пайдаланып ең үлкен жол(дар)ды қайтарады.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

<code>comparisonCriteria</code> берілген, <code>table</code> ішінде ең үлкен жол(дар)ды қайтарады.    Жолдар сұрыпталғаннан кейін нәтижені одан әрі сүзу үшін <code>countOrCondition</code> параметрін көрсету керек. Сұрыптау алгоритмі түзетілген сұрыпталған нәтижеге кепілдік бере алмайтынын ескеріңіз. <code>countOrCondition</code> параметрі бірнеше түрді қабылдай алады:    <ul>        <li> Егер сан көрсетілсе, арту ретімен <code>countOrCondition</code> дейінгі элементтер тізімі қайтарылады. </li>        <li> Егер шарт көрсетілген болса, басында шартқа сай болған элементтер тізімі қайтарылады. Бір элемент шартқа сай болмаса, басқа ешбір элементтер қарастырылмайды. </li>  </ul>


## Examples

### Example #1 
Кестеде [a] &gt; 0 шарты бар [a] бағанында ең үлкен мән бар жолды анықтау. Сүзгі қолданылмай тұрып жолдар сұрыпталады.
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
Кестеде [b] &gt; 0 шарты бар [a] бағанында ең үлкен мән бар жолды анықтау. Сүзгі қолданылмай тұрып жолдар сұрыпталады.
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
