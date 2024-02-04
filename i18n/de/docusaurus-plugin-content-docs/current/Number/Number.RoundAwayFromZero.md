---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Gibt das Ergebnis der Aufrundung positiver Zahlen und der Abrundung negativer Zahlen zurück. Die Anzahl der Dezimalstellen kann angegeben werden.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Gibt das Ergebnis der Rundung von <code>number</code> auf der Grundlage des Vorzeichens zurück. Positive Zahlen werden aufgerundet, negative Zahlen abgerundet.    Wenn <code>digits</code> angegeben wird, wird <code>number</code> auf die Anzahl <code>digits</code> der Dezimalstellen gerundet.  


## Examples

### Example #1 
Rundet die Zahl -1,2 von null weg.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Rundet die Zahl 1,2 von null weg.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Rundet die Zahl -1,234 auf zwei Dezimalstellen von null weg.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
