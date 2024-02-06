---
title: Binary.Buffer
---

# Binary.Buffer


將二進位值緩衝在記憶體中。


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Remarks

將二進位值緩衝在記憶體中。這個呼叫的結果是穩定的二進位值，表示它會有確定的長度和位元組順序。


## Examples

### Example #1 
建立二進位值的穩定版本。
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
