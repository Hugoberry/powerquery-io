---
title: List.Sum
---

# List.Sum


Tiek atgriezta saraksta vienumu summa.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Tiek atgriezta to saraksta `list` vērtību summa, kas nav Null. Ja visas saraksta vērtības ir Null, tiek atgriezta vērtība Null.


## Examples

### Example #1
Iegūstiet sarakstā `{1, 2, 3}` ietverto skaitļu summu.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
