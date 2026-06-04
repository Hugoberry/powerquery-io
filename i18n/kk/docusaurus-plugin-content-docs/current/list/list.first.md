---
title: List.First
---

# List.First


Тізімнің бірінші мәнін немесе бос болса, көрсетілген әдепкі мәнді қайтарады.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

`list` тізіміндегі бірінші элементті немесе тізім бос болса, `defaultValue` міндетті емес әдепкі мәнін қайтарады. Егер тізім бос болса және әдепкі мән көрсетілмеген болса, функция `null` мәнін қайтарады.


## Examples

### Example #1
\{1, 2, 3\} тізіміндегі бірінші мәнді анықтау.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2
\{\} тізіміндегі бірінші мәнді анықтау. Егер тізім бос болса, -1 мәнін қайтару.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
