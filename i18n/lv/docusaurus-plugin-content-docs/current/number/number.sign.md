---
title: Number.Sign
---

# Number.Sign


Tiek atgriezta vērtība 1, ja skaitlis ir pozitīvs, vērtība -1, ja skaitlis ir negatīvs, un vērtība 0, ja skaitlis ir Nulle.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Atgriež vērtību 1, ja skaitlis `number` ir pozitīvs, vērtību -1, ja tas ir negatīvs, un vērtību 0, ja šis skaitlis ir nulle. Ja `number` vērtība ir Null, funkcija `Number.Sign` atgriež vērtību Null.


## Examples

### Example #1
Nosakiet skaitļa 182 zīmi.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2
Nosakiet skaitļa -182 zīmi.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3
Nosakiet skaitļa 0 zīmi.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
