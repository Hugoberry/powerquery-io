---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Gibt die nächsthöhere ganze Zahl zurück. Die Anzahl der Dezimalstellen kann angegeben werden.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Gibt das Ergebnis der Rundung von <code>number</code> auf die nächste höchste ganze Zahl aus. Wenn <code>number</code> NULL ist, gibt diese Funktion NULL aus.    Wenn <code>digits</code> angegeben wird, wird <code>number</code> auf die angegebene Anzahl von Dezimalstellen gerundet.  


## Examples

### Example #1 
Rundet 1,234 auf eine ganze Zahl auf.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Rundet 1,999 auf eine ganze Zahl auf.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Rundet 1,234 auf zwei Dezimalstellen auf.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
