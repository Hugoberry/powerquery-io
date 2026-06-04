---
title: Number.IsOdd
---

# Number.IsOdd


Tiek norādīts, vai vērtība ir nepāra skaitlis.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Tiek norādīts, vai vērtība ir nepāra skaitlis. Ja vērtība `number` ir nepāra skaitlis, tiek atgriezta vērtība `true`, pretējā gadījumā tiek atgriezta vērtība `false`.


## Examples

### Example #1
Pārbaudiet, vai 625 ir nepāra skaitlis.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
Pārbaudiet, vai 82 ir nepāra skaitlis.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
