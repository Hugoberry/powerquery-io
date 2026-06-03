---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Gibt das Ergebnis der Abrundung positiver Zahlen und der Aufrundung negativer Zahlen zurück. Die Anzahl der Dezimalstellen kann angegeben werden.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Gibt das Ergebnis der Rundung von `number` auf der Grundlage des Vorzeichens zurück. Positive Zahlen werden abgerundet, negative Zahlen aufgerundet. Wenn `digits` angegeben wird, wird `number` auf die Anzahl `digits` der Dezimalstellen gerundet.


## Examples

### Example #1
Rundet die Zahl -1,2 Richtung null.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2
Rundet die Zahl 1,2 Richtung null.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3
Rundet die Zahl -1,234 auf zwei Dezimalstellen gegen null.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
