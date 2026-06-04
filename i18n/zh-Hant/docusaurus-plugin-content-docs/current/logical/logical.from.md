---
title: Logical.From
---

# Logical.From


根據指定的值建立邏輯。


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

從指定的 `value` 傳回 `logical` 值。若指定的 `value` 是 `null`，則 `Logical.From` 會傳回 `null`。若指定的 `value` 是 `logical`，則會傳回 `value`。可以將下列類型的值轉換成 `logical` 值:

-   `text`: 根據文字值 (`"true"` 或 `"false"`) 產生的 `logical` 值。如需詳細資料，請參閱 `Logical.FromText`。
-   `number`: 若 `value` 等於 `0`，即為 `false`，否則為 `true`。

若 `value` 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1
將 `2` 轉換成 `logical` 值。
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
