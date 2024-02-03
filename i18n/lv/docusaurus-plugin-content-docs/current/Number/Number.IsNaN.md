---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Tiek norādīts, vai vērtība nav skaitlis (NaN).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Tiek norādīts, vai vērtība nav skaitlis (NaN). Ja vērtība <code>number</code> atbilst funkcijas <code>Number.IsNaN</code> rezultātam, tiek atgriezta vērtība <code>true</code>, pretējā gadījumā tiek atgriezta vērtība <code>false</code>.


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
