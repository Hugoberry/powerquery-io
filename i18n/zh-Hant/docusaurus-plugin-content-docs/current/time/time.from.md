---
title: Time.From
---

# Time.From


根據指定的值建立時間。


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

從指定的 `value` 傳回 `time` 值。也可能會提供選用的 `culture` (例如 "en-US")。 若指定的 `value` 是 `null`，則 `Time.From` 會傳回 `null`。若指定的 `value` 是 `time`，則會傳回 `value`。可以將下列類型的值轉換成 `time` 值:

-   `text`: 以文字表示的 `time` 值。如需詳細資料，請參閱 `Time.FromText`。
-   `datetime`: `value` 的時間元件。
-   `datetimezone`: 等於 `value` 之本地日期時間的時間元件。
-   `number`: 等於 `value` 所表示分數天數的 `time`。若 `value` 是負值或者大於或等於 1，就會傳回錯誤。

若 `value` 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1
將 `0.7575` 轉換成 `time` 值。
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
將 `#datetime(1899, 12, 30, 06, 45, 12)` 轉換成 `time` 值。
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
