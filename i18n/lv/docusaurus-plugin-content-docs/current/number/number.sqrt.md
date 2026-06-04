---
title: Number.Sqrt
---

# Number.Sqrt


Tiek atgriezta skaitļa kvadrātsakne.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Atgriež skaitļa `number` kvadrātsakni. Ja `number` vērtība ir Null, funkcija `Number.Sqrt` atgriež vērtību Null. Ja šī vērtība ir negatīva, tiek atgriezta funkcija `Number.NaN` (nav skaitlis).


## Examples

### Example #1
Iegūstiet skaitļa 625 kvadrātsakni.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Iegūstiet skaitļa 85 kvadrātsakni.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
