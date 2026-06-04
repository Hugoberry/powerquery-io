---
title: List.IsDistinct
---

# List.IsDistinct


Тізімде көшірмелер бар-жоғын көрсетеді.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

`list` тізімінде көшірмелер бар-жоғын көрсететін логикалық мәнді қайтарады; `true` — тізім ерекше болса, `false` — қайталанатын мәндер бар болса.


## Examples

### Example #1
\{1, 2, 3\} тізімі ерекше екенін (яғни, көшірмелер жоқ) екенін анықтау.
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3, 3\} тізімі ерекше (яғни, көшірмелер жоқ) екенін анықтау.
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
