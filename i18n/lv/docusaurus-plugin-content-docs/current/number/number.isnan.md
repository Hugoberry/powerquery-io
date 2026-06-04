---
title: Number.IsNaN
---

# Number.IsNaN


Tiek norādīts, vai vērtība nav skaitlis (NaN).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Tiek norādīts, vai vērtība nav skaitlis (NaN). Atgriež `true`, ja `number` ir ekvivalents `Number.NaN`, `citādi`false.


## Examples

### Example #1
Pārbaudiet, vai skaitļu 0 un 0 dalījuma rezultāts nav skaitlis.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Pārbaudiet, vai skaitļu 1 un 0 dalījuma rezultāts nav skaitlis.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
