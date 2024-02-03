---
title: Number.Sign
---

# Number.Sign


## Description

Menghasilkan 1 jika bilangan adalah positif, -1 jika bilangan adalah negatif, dan 0 jika bilangan adalah nol.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

Menghasilkan 1 jika <code>number</code> adalah bilangan positif, -1 jika bilangan negatif, dan 0 jika nol.    Jika <code>number</code> null, <code>Number.Sign</code> akan menghasilkan null.


## Examples

### Example #1 
Menentukan tanda 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Menentukan tanda -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Menentukan tanda 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
