---
title: List.MinN
---

# List.MinN


## Description

Тізімдегі ең кіші мәнді(дерді) қайтарады. Қайтарылатын мәндер санын немесе сүзу шартын көрсетуге болады.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

<code>list</code> тізіміндегі ең кіші мәнді(дерді) қайтарады.    <code>countOrCondition</code> параметрі қайтарылатын мәндер санын немесе сүзу шартын көрсетеді. <code>comparisonCriteria</code> міндетті емес параметрі тізімдегі мәндерді салыстыру әдісін көрсетеді. <ul>        <li> <code>list</code>: мәндер тізімі.</li>        <li> <code>countOrCondition</code>:  егер сан көрсетілген болса, арту ретімен берілген <code>countOrCondition</code> дейінгі элементтер тізімі қайтарылады. Егер шарт көрсетілген болса, басында шартқа сай болған элементтер тізімі қайтарылады. Бір элемент шартқа сай болмаса, басқа элементтер қарастырылмайды. Егер бұл параметрдің мәні null болса, тізімдегі бір ең кіші мән қайтарылады.</li><li><code>comparisonCriteria</code>: <i>[Міндетті емес]</i> тізімдегі элементтерді салыстыру әдісін анықтау үшін <code>comparisonCriteria</code> міндетті емес мәнін көрсетуге болады. Егер бұл параметрдің мәні null болса, әдепкі салыстыру құралы пайдаланылады. </li></ul>


## Examples

### Example #1 
&lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt; тізіміндегі 5 ең кіші мәнді анықтау.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
