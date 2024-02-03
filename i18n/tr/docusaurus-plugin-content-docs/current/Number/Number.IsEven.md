---
title: Number.IsEven
---

# Number.IsEven


## Description

Değerin çift olup olmadığını gösterir.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Details

<code>number</code> değeri çift ise <code>true</code>, aksi halde <code>false</code> döndürerek değerin çift olup olmadığını gösterir.


## Examples

### Example #1 
625&#39;in çift sayı olup olmadığını denetler.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2 
82&#39;in çift sayı olup olmadığını denetler.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
