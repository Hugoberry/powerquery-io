---
title: List.Sum
---

# List.Sum


Returnerer summen af elementerne på listen.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Returnerer summen af de værdier, der ikke er null, på listen, `list`. Returnerer null, hvis der ikke er tal, som ikke er null, på listen.


## Examples

### Example #1
Find summen af tallene på listen `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
