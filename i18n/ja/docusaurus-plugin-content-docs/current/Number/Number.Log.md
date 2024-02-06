---
title: Number.Log
---

# Number.Log


指定された数値 (既定値は e) を底とする数値の対数を返します。


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

数値 <code>number</code> の、指定された <code>base</code> を底とする対数を返します。<code>base</code> を指定しなかった場合、既定値は Number.E です。    <code>number</code> が null の場合、<code>Number.Log</code> は null を返します。


## Examples

### Example #1 
2 の 10 を底とする対数を取得します。
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
e を底とする 2 の対数を取得します。
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
