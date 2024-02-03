---
title: Number.Sign
---

# Number.Sign


## Description

Palauttaa arvon 1, jos luku on positiivinen, arvon -1, jos se on negatiivinen, ja arvon 0, jos se on nolla.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

Palauttaa arvon 1, jos <code>number</code> on positiivinen luku, arvon -1, jos se on negatiivinen luku, ja arvon 0, jos se on nolla.    Jos <code>number</code> on tyhjäarvo, <code>Number.Sign</code> palauttaa tyhjäarvon.


## Examples

### Example #1 
Selvitä luvun 182 etumerkki.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Selvitä luvun -182 etumerkki.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Selvitä luvun 0 etumerkki.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
