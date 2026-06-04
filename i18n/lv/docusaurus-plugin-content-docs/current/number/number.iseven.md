---
title: Number.IsEven
---

# Number.IsEven


Tiek norādīts, vai vērtība ir pāra skaitlis.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Tiek norādīts, vai vērtība `number` ir pāra skaitlis. Ja tā ir, tiek atgriezta vērtība `true`, pretējā gadījumā tiek atgriezta vērtība `false`.


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
