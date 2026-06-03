---
title: DateTime.FromText
---

# DateTime.FromText


根據本地和國際日期時間格式建立 datetimezone。


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

以文字表示 (`text`) 建立 `datetime` 值。可能會提供選用的 `record` 參數 (`options`) 來指定其他屬性。`record` 可能包含下列欄位:

-   `Format`: `text` 值，指出要使用的格式。如需詳細資料，請前往 https://go.microsoft.com/fwlink/?linkid=2180104 與 https://go.microsoft.com/fwlink/?linkid=2180105。省略此欄位或提供 `null` 將導致盡量剖析日期。
-   `Culture`: 當 `Format` 不是 null 時，`Culture` 會控制一些格式規範。例如，`"en-US"` 的 `"MMM"` 為 `"Jan", "Feb", "Mar", ...`，而 `"ru-RU"` 的 `"MMM"` 為 `"янв", "фев", "мар", ...`。當 `Format` 為 `null`，`Culture` 會控制要使用的預設格式。當 `Culture` 是 `null` 或已省略時，會使用 `Culture.Current`。

若要支援舊版工作流程，`options` 也可以是文字值。這與 `options = [Format = null, Culture = options]` 具有相同的行爲。


## Examples

### Example #1
將 `"2010-12-31T01:30:00"` 轉換成 datetime 值。
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
將 `"2010-12-31T01:30:00.121212"` 轉換成 datetime 值。
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
將 `"2010-12-31T01:30:00"` 轉換成 datetime 值。
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
將 `"20101231T013000"` 轉換成 datetime 值。
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
