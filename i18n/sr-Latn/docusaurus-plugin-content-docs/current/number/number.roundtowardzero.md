---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Daje rezultat zaokruživanja pozitivnih brojeva na manji broj, a negativnih na veći. Može da se navede broj cifara.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Daje rezultat zaokruživanja broja `number` na osnovu znaka broja. Ova funkcija će pozitivne brojeve zaokružiti na manji broj, a negativne na veći. Ako je `digits` naveden, `number` se zaokružuje na `digits` broj decimalnih cifara.


## Examples

### Example #1
Zaokruživanje broja -1,2 prema nuli.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2
Zaokruživanje broja 1,2 prema nuli.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3
Zaokružite broj -1,234 na broj sa dva decimalna mesta prema nuli.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
