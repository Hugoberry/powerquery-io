---
title: Binary.Range
---

# Binary.Range


オフセットで始まるバイナリ値のサブセットを返します。


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

オフセット <code>binary</code> で始まるバイナリ値のサブセットを返します。省略可能なパラメーター <code>offset</code> では、そのサブセットの最大長を設定します。


## Examples

### Example #1 
オフセット 6 で始まるバイナリ値のサブセットを返します。
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
バイナリ値のオフセット 6 から長さが 2 のサブセットを返します。
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
