---
title: Number.Log
---

# Number.Log


## Description

根据指定底数(默认为 e)返回数的对数。


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

根据指定底数 <code>base</code> 返回数值 <code>number</code> 的对数。如果未指定 <code>base</code>，则默认值为 Number.E。    如果 <code>number</code> 为 null，则 <code>Number.Log</code> 返回 null。


## Examples

### Example #1 
获取 2 的以 10 为底的对数。
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
获取 2 的以 e 为底的对数。
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
