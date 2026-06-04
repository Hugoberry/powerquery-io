---
title: Time.FromText
---

# Time.FromText


根據本機、國際和自訂時間格式建立時間。


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

以文字表示 (`text`) 建立 `time` 值。可能會提供選用的 `record` 參數 (`options`) 來指定其他屬性。`record` 可能包含下列欄位:

-   `Format`: `text` 值，指出要使用的格式。如需詳細資料，請前往 https://go.microsoft.com/fwlink/?linkid=2180104 與 https://go.microsoft.com/fwlink/?linkid=2180105。省略此欄位或提供 `null` 將導致盡量剖析時間。
-   `Culture`: 當 `Format` 不是 null 時，`Culture` 會控制一些格式規範。例如，在 `"en-US"` 中，`"tt"` 為 `"AM" 或 "PM"`，在 `"ar-EG"` 中，`"tt"` 為 `"ص" 或 "م"`。當 `Format` 為 `null`，`Culture` 會控制要使用的預設格式。當 `Culture` 是 `null` 或已省略時，會使用 `Culture.Current`。

若要支援舊版工作流程，`options` 也可以是文字值。這與 `options = [Format = null, Culture = options]` 具有相同的行爲。


## Examples

### Example #1
將 `"10:12:31am"` 轉換成時間值。
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
將 `"1012"` 轉換成 Time 值。
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
將 `"10"` 轉換成 Time 值。
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
