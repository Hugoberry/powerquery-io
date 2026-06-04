---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Тізімнің басында көрсетілген элементтер санын өткізіп жіберетін тізімді қайтарады.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

`list`тізімінің бірінші элементін жоятын тізімді қайтарады. Егер `list` бос тізім болса, бос тізім қайтарылады. Бұл функция төменде көрсетілгендей бірнеше мәнді жоюды қолдау үшін қосымша `countOrCondition` параметрін қабылдайды.

-   Егер сан көрсетілсе, осыншама көп элементтер жойылады.
-   Егер шарт көрсетілсе, `list` басында барлық дәйекті сәйкес элементтер жойылады.
-   Бұл параметр бос болса, әдепкі әрекет байқалады.


## Examples

### Example #1
\{1, 2, 3, 4, 5\} тізімінен бірінші 3 сан жоқ тізімді жасау.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
\{5, 4, 2, 6, 1\} тізімінен 3-тен кішірек саннан басталатын тізімді жасау.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
