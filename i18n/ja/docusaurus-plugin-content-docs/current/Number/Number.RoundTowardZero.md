---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

正の数値の場合は切り下げた結果を返し、負の数値の場合は切り上げた結果を返します。桁数は指定できます。


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

数値の符号に基づいて <code>number</code> を丸めた結果を返します。この関数は、正の数値は切り下げ、負の数値は切り上げます。    <code>digits</code> が指定された場合、<code>number</code> は小数点以下 <code>digits</code> 桁に丸められます。  


## Examples

### Example #1 
数値 -1.2 を 0 の方向に丸めます。
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
数値 1.2 を 0 の方向に丸めます。
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
-1.234 を小数点以下が 2 桁になるように 0 の方向に丸めます。
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
