---
title: List.Distinct
---

# List.Distinct


## Description

Көшірмелері жойылған мәндер тізімін қайтарады.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

<code>list</code> тізіміндегі көшірмелері жойылған барлық мәндерді қамтитын тізімді қайтарады. Тізім бос болса, нәтиже бос тізім болады.


## Examples

### Example #1 
\{1, 1, 2, 3, 3, 3} тізімінен көшірмелерді жою.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
