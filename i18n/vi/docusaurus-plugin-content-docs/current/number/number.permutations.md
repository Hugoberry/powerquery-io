---
title: Number.Permutations
---

# Number.Permutations


Trả về số lần hoán vị.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Trả về số lần hoán vị có thể tạo từ một số mục, `setSize`, với kích thước hoán vị được chỉ định là `permutationSize`.


## Examples

### Example #1
Tìm số lần hoán vị từ tổng cộng 5 mục trong các nhóm 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
