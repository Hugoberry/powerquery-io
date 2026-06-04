---
title: List.Skip
---

# List.Skip


傳回清單，略過清單開頭指定數目的項目。


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

傳回略過清單 `list` 之第一個元素的清單。如果 `list` 為空白清單，則會返回空白清單。 此函數接受選擇性參數 `countOrCondition`，以支援跳過下列多個值。

-   如果指定數字，則會跳過最多該數量的項目。
-   如果指定條件，則會跳過 `list` 開頭的任何連續符合項目。
-   如果此參數為 Null，則觀察到預設行為。


## Examples

### Example #1
根據 \{1, 2, 3, 4, 5\} 建立不含前 3 個數字的清單。
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
根據 \{5, 4, 2, 6, 1\} 建立以小於 3 的數字開頭的清單。
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
