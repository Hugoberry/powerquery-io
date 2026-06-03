---
title: Number.From
---

# Number.From


根據指定的值建立數字。


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

從指定的 `value` 傳回 `number` 值。也可能會提供選用的 `culture` (例如 "en-US")。 若指定的 `value` 是 `null`，則 `Number.From` 會傳回 `null`。若指定的 `value` 是 `number`，則會傳回 `value`。可以將下列類型的值轉換成 `number` 值:

-   `text`: 以文字表示的 `number` 值。會處理通用文字格式 ("15", "3,423.10", "5.0E-10")。如需詳細資料，請參閱 `Number.FromText`。
-   `logical`: `true` 為 1，`false` 為 0。
-   `datetime`: 雙精確度浮點數，包含對等的 OLE Automation 日期。
-   `datetimezone`: 雙精確度浮點數，包含等於 `value` 之本地日期與時間的 OLE Automation 日期。
-   `date`: 雙精確度浮點數，包含對等的 OLE Automation 日期。
-   `time`: 以分數天數表示。
-   `duration`: 以整數與分數天數表示。

若 `value` 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1
取得 `"4"` 的 `number` 值。
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
取得 `#datetime(2020, 3, 20, 6, 0, 0)` 的 `number` 值。
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
取得 `"12.3%"` 的`數值` 。
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
