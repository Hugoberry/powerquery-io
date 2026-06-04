---
title: List.RemoveLastN
---

# List.RemoveLastN


傳回清單，移除清單結尾指定數目的項目。


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

傳回移除清單 `list` 結尾最後 `countOrCondition` 個元素的清單。如果 `list` 擁有少於 `countOrCondition` 個元素，會返回空的清單。

-   如果指定數字，則會移除最多該數量的項目。
-   如果指定條件，則會移除 `list` 結尾的任何連續符合項目。
-   如果此參數為 Null，則只會移除一個項目。


## Examples

### Example #1
根據 \{1, 2, 3, 4, 5\} 建立不含末 3 個數字的清單。
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
根據 \{5, 4, 2, 6, 4\} 建立以小於 3 的數字結束的清單。
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
