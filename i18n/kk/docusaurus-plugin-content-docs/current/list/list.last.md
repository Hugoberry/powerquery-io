---
title: List.Last
---

# List.Last


Тізімнің соңғы мәнін немесе бос болса, көрсетілген әдепкі мәнді қайтарады.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Арнайы тізімдегі соңғы элементті қайтарады немесе егер тізім бос болса, таңдалған әдепкі мәнді қайтарады.

-   `list`: Тексерілетін тізім.
-   `defaultValue`: (Міндетті емес) тізім бос болған жағдайда қайтарылатын әдепкі мән. Егер тізім бос болып, әдепкі мән көрсетілмесе, функция `null` мәнін қайтарады.


## Examples

### Example #1
\{1, 2, 3\} тізіміндегі соңғы мәнді анықтау.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
\{\} тізіміндегі соңғы мәнді анықтау немесе бос болса, -1.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
