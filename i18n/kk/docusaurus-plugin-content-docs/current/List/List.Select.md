---
title: List.Select
---

# List.Select


## Description

Шартқа сәйкес мәндердің тізімін қайтарады.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

<code>list</code> тізімінен <code>selection</code> таңдау шартына сәйкес мәндер тізімін қайтарады.


## Examples

### Example #1 
\{1, -3, 4, 9, -2} тізімінде 0-ден үлкенірек мәндерді анықтау.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
