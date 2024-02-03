---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Ұзындығы бірге тең тізім үшін бір тізім элементін және бос тізім үшін әдепкі мәнді қайтарады.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Егер <code>list</code> тізімінде тек бір элемент болса, сол элементті қайтарады.    Егер тізім бос болса, міндетті емес <code>default</code> көрсетілмесе, функция нөл мәнін қайтарады. Егер тізімде бірнеше элемент бар болса, функция қатені қайтарады.


## Examples

### Example #1 
\{1} тізімінде бір мәнді анықтау.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
\{} тізімінде бір мәнді анықтау.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
\{} тізімінде бір мәнді анықтау. Егер бос болса, -1 мәнін қайтару.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
