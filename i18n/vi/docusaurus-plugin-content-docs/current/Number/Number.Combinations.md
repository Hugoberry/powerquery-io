---
title: Number.Combinations
---

# Number.Combinations


Trả về số lượng tổ hợp duy nhất.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Trả về số lượng tổ hợp duy nhất từ một danh sách mục, <code>setSize</code>, với kích cỡ kết hợp được chỉ định là <code>combinationSize</code>.<ul>    <li><code>setSize</code>: Số lượng mục trong danh sách.</li>    <li><code>combinationSize</code>: Số lượng mục trong mỗi tổ hợp.</li></ul>


## Examples

### Example #1 
Tìm số lượng tổ hợp từ tổng cộng 5 mục khi mỗi tổ hợp là một nhóm 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
