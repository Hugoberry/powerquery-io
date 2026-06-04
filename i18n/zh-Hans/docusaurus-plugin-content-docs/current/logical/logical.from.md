---
title: Logical.From
---

# Logical.From


从给定的值创建逻辑。


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

从给定的 `value` 返回 `logical` 值。如果给定的 `value` 是 `null`，则 `Logical.From` 将返回 `null`。如果给定的 `value` 是 `logical`，则返回 `value`。以下类型的值可以转换为 `logical` 值:

-   `text`: 来自文本值的 `logical` 值，可以为 `“true”` 或 `“false”`。有关详细信息，请参阅 `Logical.FromText`。
-   `number`: 如果 `value` 等于 `0`，则为 `false`，否则为 `true`。

如果 `value` 属于任何其他类型，则返回错误。


## Examples

### Example #1
将 `2` 转换为 `logical` 值。
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
