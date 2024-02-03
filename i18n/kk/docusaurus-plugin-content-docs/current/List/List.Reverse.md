---
title: List.Reverse
---

# List.Reverse


## Description

Тізімдегі мәндердің ретін кері етеді.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

<code>list</code> тізіміндегі мәндер бар тізімді кері ретпен қайтарады.


## Examples

### Example #1 
\{1..10} тізімінен кері реттегі тізімді жасау.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
