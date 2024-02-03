---
title: Number.IsNaN
---

# Number.IsNaN


## Description

値が NaN (非数) かどうかを示します。


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

値が NaN (非数) かどうかを示します。<code>number</code> が <code>Number.IsNaN</code> と等しい場合は <code>true</code> を返し、それ以外の場合は <code>false</code> を返します。


## Examples

### Example #1 
0 の 0 による除算が NaN であるかどうかを調べます。
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
1 の 0 による除算が NaN であるかどうかを調べます。
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
