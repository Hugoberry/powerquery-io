---
title: Number.Log
---

# Number.Log


## Description

Sayının belirtilen tabanda (varsayılan e) logaritmasını döndürür.


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Bir sayının (<code>number</code>) belirtilen <code>base</code> tabanında logaritmasını döndürür. <code>base</code> belirtilmediyse varsayılan değer Number.E değeridir.    <code>number</code> null ise <code>Number.Log</code>, null döndürür.


## Examples

### Example #1 
2&#39;nin 10 tabanındaki logaritmasını alır.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
2&#39;nin e tabanındaki logaritmasını alır.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
