---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Gibt die nächstniedrigere Zahl zurück. Die Anzahl der Dezimalstellen kann angegeben werden.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Gibt das Ergebnis der Rundung von <code>number</code> auf die vorherige höchste ganze Zahl aus. Wenn <code>number</code> NULL ist, gibt diese Funktion NULL aus.    Wenn <code>digits</code> angegeben wird, wird <code>number</code> auf die angegebene Anzahl von Dezimalstellen gerundet.  


## Examples

### Example #1 
Rundet 1,234 auf eine ganze Zahl ab.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Rundet 1,999 auf eine ganze Zahl ab.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Rundet 1,999 auf zwei Dezimalstellen ab.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
