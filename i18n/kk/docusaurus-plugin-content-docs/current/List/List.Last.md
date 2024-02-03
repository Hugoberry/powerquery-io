---
title: List.Last
---

# List.Last


## Description

Тізімнің соңғы мәнін немесе бос болса, көрсетілген әдепкі мәнді қайтарады.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

<code>list</code> тізіміндегі соңғы элементті немесе тізім бос болса, <code>defaultValue</code> міндетті емес әдепкі мәнін қайтарады.    Егер тізім бос болса және әдепкі мән көрсетілмеген болса, функция <code>null</code> мәнін қайтарады.


## Examples

### Example #1 
\{1, 2, 3} тізіміндегі соңғы мәнді анықтау.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
\{} тізіміндегі соңғы мәнді анықтау немесе бос болса, -1.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
