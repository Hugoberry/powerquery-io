---
title: DateTime.From
---

# DateTime.From


根據指定的值建立 datetime。


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

從指定的 `value` 傳回 `datetime` 值。也可能會提供選用的 `culture` (例如 "en-US")。 若指定的 `value` 是 `null`，則 `DateTime.From` 會傳回 `null`。若指定的 `value` 是 `datetime`，則會傳回 `value`。可以將下列類型的值轉換成 `datetime` 值:

-   `text`: 以文字表示的 `datetime` 值。如需詳細資料，請參閱 `DateTime.FromText`。
-   `date`: `datetime` 以 `value` 為日期元件，並以 `12:00:00 AM` 為時間元件。
-   `datetimezone`: 等於 `value` 的本地 `datetime`。
-   `time`: `datetime` 以 `0` 的 OLE Automation 日期對等日期為日期元件，並以 `value` 為時間元件。
-   `number`: `datetime` 包含 `value` 所表示的 OLE Automation 日期對等。

若 `value` 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1
將 `#time(06, 45, 12)` 轉換成 `datetime` 值。
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
將 `#date(1975, 4, 4)` 轉換成 `datetime` 值。
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
