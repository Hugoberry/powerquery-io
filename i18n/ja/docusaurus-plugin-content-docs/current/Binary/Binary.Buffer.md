---
title: Binary.Buffer
---

# Binary.Buffer


バイナリ値をメモリにバッファー処理します。


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Remarks

バイナリ値をメモリにバッファー処理します。この呼び出しの結果は、安定したバイナリ値です。つまり、長さとバイト順が決まっています。


## Examples

### Example #1 
バイナリ値の安定したバージョンを作成します。
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
