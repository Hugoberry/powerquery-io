---
title: Number.Sign
---

# Number.Sign


## Description

数値が正の場合は 1、負の場合は -1、0 の場合は 0 を返します。


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

<code>number</code> が正の数値の場合は 1、負の数値の場合は -1、0 の場合は 0 を返します。    <code>number</code> が null の場合、<code>Number.Sign</code> は null を返します。


## Examples

### Example #1 
182 の符号を調べます。
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
-182 の符号を調べます。
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
0 の符号を調べます。
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
