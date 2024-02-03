---
title: Number.IsEven
---

# Number.IsEven


## Description

Označuje, ali je vrednost sodo število.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Details

Označuje, ali je vrednost <code>number</code> sodo število, tako da vrne <code>true</code>, če je število sodo, sicer vrne <code>false</code>.


## Examples

### Example #1 
Preverite, ali je 625 sodo število.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2 
Preverite, ali je 82 sodo število.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
