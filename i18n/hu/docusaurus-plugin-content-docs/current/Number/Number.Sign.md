---
title: Number.Sign
---

# Number.Sign


## Description

1 értéket ad vissza, ha a szám pozitív, -1 értéket, ha negatív, nulla esetén pedig 0-t.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

1 értéket ad vissza, ha a(z) <code>number</code> pozitív szám, –1 értéket, ha negatív szám, nulla esetén pedig 0-t.    Ha a(z) <code>number</code> érték null, a <code>Number.Sign</code> függvény nullértéket ad vissza.


## Examples

### Example #1 
A 182 előjelének megállapítása
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
A -182 előjelének megállapítása
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
A 0 előjelének megállapítása
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
