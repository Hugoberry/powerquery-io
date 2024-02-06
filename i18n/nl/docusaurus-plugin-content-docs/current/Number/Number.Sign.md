---
title: Number.Sign
---

# Number.Sign


Retourneert 1 als het getal positief is, -1 als het getal negatief is en 0 als het getal nul is.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Hiermee wordt 1 geretourneerd als <code>number</code> een positief getal is, -1 als het een negatief getal is en 0 als het nul is. Als <code>number</code> null is, retourneert <code>Number.Sign</code> null.


## Examples

### Example #1 
Het teken van 182 bepalen.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Het teken van -182 bepalen.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Het teken van 0 bepalen.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
