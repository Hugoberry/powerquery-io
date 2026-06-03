---
title: Number.IsEven
---

# Number.IsEven


Değerin çift olup olmadığını gösterir.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

`number` değeri çift ise `true`, aksi halde `false` döndürerek değerin çift olup olmadığını gösterir.


## Examples

### Example #1
625'in çift sayı olup olmadığını denetler.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
82'in çift sayı olup olmadığını denetler.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
