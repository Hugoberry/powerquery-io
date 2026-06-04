---
title: List.IsEmpty
---

# List.IsEmpty


Тізім бос болса, шын мәнін қайтарады.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

`list` тізімінде мәндер жоқ болса (ұзындығы — 0) `true` мәнін қайтарады. Тізім мәндерді қамтыса (ұзындығы > 0), `false` мәнін қайтарады.


## Examples

### Example #1
\{\} тізімінің бос екендігін анықтау.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2\} тізімінің бос екендігін анықтау.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
