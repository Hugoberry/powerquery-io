---
title: List.RemoveFirstN
---

# List.RemoveFirstN


## Description

Тізімнің басында көрсетілген элементтер санын өткізіп жіберетін тізімді қайтарады.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

<code>list</code> тізімінің бірінші элементін жоятын тізімді қайтарады. Егер <code>list</code> бос тізім болса, бос тізім қайтарылады.Бұл функция төменде тізілгендей бірнеше мәнді жою үшін <code>countOrCondition</code> міндетті емес параметрін қабылдайды.  <ul> <li>Егер сан көрсетілген болса, сонша элементке дейін жойылады. </li> <li>Егер шарт көрсетілген болса, қайтарылған тізім <code>list</code> ішіндегі шарттарға сай бірінші элементтен басталады. Бір элемент шартқа сай болмаса, басқа ешбір элементтер қарастырылмайды. </li> <li>Егер бұл параметр нөл болса, әдепкі тәртібі сақталады. </li> </ul>


## Examples

### Example #1 
\{1, 2, 3, 4, 5} тізімінен бірінші 3 сан жоқ тізімді жасау.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
\{5, 4, 2, 6, 1} тізімінен 3-тен кішірек саннан басталатын тізімді жасау.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions