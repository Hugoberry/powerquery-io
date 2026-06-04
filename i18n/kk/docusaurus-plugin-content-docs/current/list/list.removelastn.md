---
title: List.RemoveLastN
---

# List.RemoveLastN


Тізімнің соңынан көрсетілген элементтер санын жоятын тізімді қайтарады.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

`countOrCondition` тізімнің соңынан соңғы `list`элементті жоятын тізімді қайтарады. Егер `list` ішінде `countOrCondition` элементтен аз болса, бос тізім қайтарылады.

-   Егер сан көрсетілсе, осыншама көп элементтер жойылады.
-   Егер шарт көрсетілсе, `list` соңында барлық дәйекті сәйкес элементтер жойылады.
-   Бұл параметр бос болса, тек бір элемент жойылады.


## Examples

### Example #1
\{1, 2, 3, 4, 5\} тізімінен бірінші соңғы 3 саны жоқ тізім жасау.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
\{5, 4, 2, 6, 4\} тізімінен 3-тен кіші саннан аяқталатын тізім жасау.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
