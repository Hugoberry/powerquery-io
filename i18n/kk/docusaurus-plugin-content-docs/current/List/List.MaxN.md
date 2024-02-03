---
title: List.MaxN
---

# List.MaxN


## Description

Тізімдегі ең үлкен мәнді(дерді) қайтарады. Қайтарылатын мәндер саны немесе сүзу шарты көрсетілуі керек.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

<code>list</code> тізімдегі ең үлкен мәнді(дерді) қайтарады.    Жолдар сұрыпталғаннан кейін нәтижені одан әрі сүзу үшін міндетті емес параметрлерді көрсету керек. <code>countOrCondition</code> міндетті емес параметрі қайтарылатын мәндер санын немесе сүзу шартын көрсетеді. <code>comparisonCriteria</code> міндетті емес параметрі тізімдегі мәндерді салыстыру әдісін көрсетеді. <ul>        <li> <code>list</code>: мәндер тізімі.</li>        <li> <code>countOrCondition</code>:  егер сан көрсетілген болса, арту ретімен берілген <code>countOrCondition</code> дейінгі элементтер тізімі қайтарылады. Егер шарт көрсетілген болса, басында шартқа сай болған элементтер тізімі қайтарылады. Бір элемент шартқа сай болмаса, басқа элементтер қарастырылмайды.</li><li><code>comparisonCriteria</code>: <i>[Міндетті емес]</i> тізімдегі элементтерді салыстыру әдісін анықтау үшін <code>comparisonCriteria</code> міндетті емес мәнін көрсетуге болады. Егер бұл параметрдің мәні null болса, әдепкі салыстыру құралы пайдаланылады. </li></ul>



## Category
List.Ordering
