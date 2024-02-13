---
title: Number.Sign
---

# Number.Sign


Returnerer 1, hvis tallet er positivt, -1, hvis det er negativt, og 0, hvis det er nul.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Returnerer 1, hvis <code>number</code> er et positivt tal, -1, hvis det er et negativt tal, og 0, hvis det er nul.    Hvis <code>number</code> er null, returnerer <code>Number.Sign</code> null.


## Examples

### Example #1 
Afgør fortegnet for 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Afgør fortegnet for -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Afgør fortegnet for 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
