---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


Daje rezultat zaokruživanja pozitivnih brojeva na veći broj, a negativnih na manji. Može da se navede broj cifara.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Daje rezultat zaokruživanja broja `number` na osnovu znaka broja. Ova funkcija će pozitivne brojeve zaokružiti na veći broj, a negativne na manji. Ako je `digits` naveden, `number` se zaokružuje na `digits` broj decimalnih cifara.


## Examples

### Example #1
Zaokruživanje broja -1,2 dalje od nule.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2
Zaokruživanje broja 1,2 dalje od nule.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3
Zaokružite broj -1,234 na broj sa dva decimalna mesta u suprotnom smeru od nule.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
