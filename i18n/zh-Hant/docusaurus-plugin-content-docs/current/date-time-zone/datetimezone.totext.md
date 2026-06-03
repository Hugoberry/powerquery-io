---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


傳回 datetimezone 值的文字表示。


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

傳回以文字表示的 `dateTimeZone`。可能會提供選用的 `record` 參數 (`options`) 來指定其他屬性。`culture` 僅用於舊版工作流程。`record` 可能包含下列欄位:

-   `Format`: `text` 值，指出要使用的格式。如需詳細資料，請前往 https://go.microsoft.com/fwlink/?linkid=2180104 與 https://go.microsoft.com/fwlink/?linkid=2180105。省略此欄位或提供 `null` 將會導致使用 `Culture` 定義的預設將日期格式化。
-   `Culture`: 當 `Format` 不是 null 時，`Culture` 會控制一些格式規範。例如，`"en-US"` 的 `"MMM"` 為 `"Jan", "Feb", "Mar", ...`，而 `"ru-RU"` 的 `"MMM"` 為 `"янв", "фев", "мар", ...`。當 `Format` 為 `null`，`Culture` 會控制要使用的預設格式。當 `Culture` 是 `null` 或已省略時，會使用 `Culture.Current`。

若要支援舊版工作流程，`options` 與 `culture` 也可以是文字值。這與 `options = [Format = options, Culture = culture]` 具有相同的行爲。


## Examples

### Example #1
將 `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` 轉換爲 `text` 值。*結果輸出可能因目前文化特性而有所不同。*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
使用自訂格式和德文文化特性進行轉換。
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
使用 ISO 8601 模式進行轉換。
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
