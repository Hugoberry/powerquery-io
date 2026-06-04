---
title: List.Product
---

# List.Product


Tiek atgriezts sarakstā ietverto skaitļu reizinājums.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Tiek atgriezts to saraksta `numbersList` skaitlisko vērtību reizinājums, kas nav Null. Ja visas saraksta vērtības ir Null, tiek atgriezta vērtība Null.


## Examples

### Example #1
Iegūstiet sarakstā `{1, 2, 3, 3, 4, 5, 5}` ietverto skaitļu reizinājumu.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
