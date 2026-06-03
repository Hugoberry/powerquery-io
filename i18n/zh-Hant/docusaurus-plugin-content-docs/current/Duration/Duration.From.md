---
title: Duration.From
---

# Duration.From


根據指定的值建立持續時間。


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

從指定值傳回持續時間值。

-   `value`: 持續時間的來源值。如果指定的 `value` 為 `null`，此函數會傳回 `null`。如果指定的 `value` 是 `持續時間`，則會傳回 `value`。下列類型的值可以轉換成 `持續時間` 值:
    -   `text`: 源於文字經過時間格式 (d.h:m:s) 的 `duration` 值。如需詳細資料，請參閱 `Duration.FromText`。
    -   `number`: 一個相當於以 `value` 表示的整數和小數天數的 `duration`。

如果 `value` 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1
將 `2.525` 轉換成 `duration` 值。
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
將 `"2.05:55:20.34567"` 轉換成 `持續時間`值。
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
