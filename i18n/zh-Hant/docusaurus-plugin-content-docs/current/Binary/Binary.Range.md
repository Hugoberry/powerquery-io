---
title: Binary.Range
---

# Binary.Range


傳回二進位值從位移處開始的子集。


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

傳回二進位值從位移 <code>binary</code> 開始的子集。選擇性參數 <code>offset</code> 會設定子集的長度上限。


## Examples

### Example #1 
傳回二進位值從位移 6 開始的子集。
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
傳回二進位值從位移 6 長度為 2 開始的子集。
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
