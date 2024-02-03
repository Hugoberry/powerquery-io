---
title: Number.Sign
---

# Number.Sign


## Description

Returnează 1 dacă numărul este pozitiv, -1 dacă numărul este negativ sau 0 dacă numărul este zero.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

Returnează 1 dacă <code>number</code> este un număr pozitiv, -1 dacă este un număr negativ și 0 dacă este zero.    Dacă <code>number</code> este nul, <code>Number.Sign</code> returnează nul.


## Examples

### Example #1 
Determinaţi semnul pentru 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Determinaţi semnul pentru -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Determinaţi semnul pentru 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
