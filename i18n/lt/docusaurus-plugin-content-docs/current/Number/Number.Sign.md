---
title: Number.Sign
---

# Number.Sign


## Description

Pateikiamas 1, jei skaičius yra teigiamas, -1, jei skaičius yra neigiamas, ir 0, jei skaičius yra nulis.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

Pateikiamas 1, jei <code>number</code> yra teigiamas skaičius, -1, jei skaičius yra neigiamas, ir 0, jei skaičius yra nulis.    Jei <code>number</code> yra null, <code>Number.Sign</code> pateikia null.


## Examples

### Example #1 
Nustatykite skaičiaus 182 ženklą.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Nustatykite skaičiaus -182 ženklą.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Nustatykite skaičiaus 0 ženklą.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
