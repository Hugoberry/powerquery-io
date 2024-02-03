---
title: Number.IsEven
---

# Number.IsEven


## Description

Navodi da li je vrednost paran broj.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Details

Navodi da li je vrednost, <code>number</code>, paran broj tako što vraća <code>true</code> ako jeste paran broj, a <code>false</code> ako nije.


## Examples

### Example #1 
Provera da li je 625 paran broj.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2 
Provera da li je 82 paran broj.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
