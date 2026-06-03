---
title: Number.Sign
---

# Number.Sign


Gibt "1" zurück, wenn die Zahl positiv ist, "-1", wenn sie negativ ist, und "0", wenn die Zahl null ist.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Gibt 1 zurück, wenn `number` eine positive Zahl ist, -1, wenn es sich um eine negative Zahl handelt, und 0, wenn die Zahl null ist. Ist `number` NULL, gibt `Number.Sign` NULL zurück.


## Examples

### Example #1
Ermittelt das Vorzeichen von 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2
Ermittelt das Vorzeichen von -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3
Ermittelt das Vorzeichen von 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
