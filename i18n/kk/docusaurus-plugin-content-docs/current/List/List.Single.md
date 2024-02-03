---
title: List.Single
---

# List.Single


## Description

Ұзындығы бірге тең тізім үшін бір тізім элементін қайтарады, әйтпесе қиыс жағдай туралы хабарды қайтарады.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Егер <code>list</code> тізімінде тек бір элемент болса, сол элементті қайтарады.    Егер бірнеше элемент бар болса немесе тізім бос болса, функция ерекшелік туралы хабарды қайтарады.


## Examples

### Example #1 
\{1} тізімінде бір мәнді анықтау.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
\{1, 2, 3} тізімінде бір мәнді анықтау.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
