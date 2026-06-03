---
title: Number.Log
---

# Number.Log


Sayının belirtilen tabanda (varsayılan e) logaritmasını döndürür.


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Bir sayının (`number`) belirtilen `base` tabanında logaritmasını döndürür. `base` belirtilmediyse varsayılan değer Number.E değeridir. `number` null ise `Number.Log`, null döndürür.


## Examples

### Example #1
2'nin 10 tabanındaki logaritmasını alır.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
2'nin e tabanındaki logaritmasını alır.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
