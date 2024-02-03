---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Тізім бос болса, шын мәнін қайтарады.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

<code>list</code> тізімінде мәндер жоқ болса (ұзындығы — 0) <code>true</code> мәнін қайтарады. Тізім мәндерді қамтыса (ұзындығы > 0), <code>false</code> мәнін қайтарады.


## Examples

### Example #1 
\{} тізімінің бос екендігін анықтау.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2} тізімінің бос екендігін анықтау.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
