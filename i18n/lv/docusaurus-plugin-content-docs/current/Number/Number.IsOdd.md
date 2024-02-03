---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Tiek norādīts, vai vērtība ir nepāra skaitlis.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Tiek norādīts, vai vērtība ir nepāra skaitlis. Ja vērtība <code>number</code> ir nepāra skaitlis, tiek atgriezta vērtība <code>true</code>, pretējā gadījumā tiek atgriezta vērtība <code>false</code>.


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
