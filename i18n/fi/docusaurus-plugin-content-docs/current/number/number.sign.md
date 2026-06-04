---
title: Number.Sign
---

# Number.Sign


Palauttaa arvon 1, jos luku on positiivinen, arvon -1, jos se on negatiivinen, ja arvon 0, jos se on nolla.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Palauttaa arvon 1, jos `number` on positiivinen luku, arvon -1, jos se on negatiivinen luku, ja arvon 0, jos se on nolla. Jos `number` on tyhjäarvo, `Number.Sign` palauttaa tyhjäarvon.


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
