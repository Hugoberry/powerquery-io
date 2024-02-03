---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Тізімнің соңынан көрсетілген элементтер санын жоятын тізімді қайтарады.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

<code>list</code> тізімнің соңынан соңғы <code>countOrCondition</code> элементті жоятын тізімді қайтарады. Егер <code>list</code> ішінде <code>countOrCondition</code> кем элемент болса, бос тізім қайтарылады. <ul> <li>Егер сан көрсетілген болса, сонша элементке дейін жойылады. </li> <li>Егер шарт көрсетілген болса, қайтарылған тізім <code>list</code> ішіндегі шарттарға сай төменгі жақтағы бірінші элементпен аяқталады. Бір элемент шартқа сай болмаса, басқа ешбір элементтер қарастырылмайды. </li> <li>Егер бұл параметрдің мәні null болса, тек бір элемент жойылады. </li> </ul>


## Examples

### Example #1 
\{1, 2, 3, 4, 5} тізімінен бірінші соңғы 3 саны жоқ тізім жасау.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
\{5, 4, 2, 6, 4} тізімінен 3-тен кіші саннан аяқталатын тізім жасау.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
