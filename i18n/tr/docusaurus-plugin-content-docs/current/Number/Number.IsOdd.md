---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Değerin tek olup olmadığını gösterir.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Değerin tek olup olmadığını gösterir. <code>number</code> bir tek sayı ise <code>true</code>, aksi halde <code>false</code> döndürür.


## Examples

### Example #1 
625&#39;in tek sayı olup olmadığını denetler.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2 
82&#39;in tek sayı olup olmadığını denetler.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
