---
title: Number.IsEven
---

# Number.IsEven


## Description

Tiek norādīts, vai vērtība ir pāra skaitlis.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Details

Tiek norādīts, vai vērtība <code>number</code> ir pāra skaitlis. Ja tā ir, tiek atgriezta vērtība <code>true</code>, pretējā gadījumā tiek atgriezta vērtība <code>false</code>.


## Examples

### Example #1 
Pārbaudiet, vai 625 ir pāra skaitlis.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2 
Pārbaudiet, vai 82 ir pāra skaitlis.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
