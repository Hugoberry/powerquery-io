---
title: Date.ToText
---

# Date.ToText


傳回日期值的文字表示法。


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

傳回以文字表示的 `date`。可能會提供選用的 `record` 參數 (`options`) 來指定其他屬性。`culture` 僅用於舊版工作流程。`record` 可能包含下列欄位:

-   `Format`: `text` 值，指出要使用的格式。如需詳細資料，請前往 https://go.microsoft.com/fwlink/?linkid=2180104 與 https://go.microsoft.com/fwlink/?linkid=2180105。省略此欄位或提供 `null` 將會導致使用 `Culture` 定義的預設將日期格式化。
-   `Culture`: 當 `Format` 不是 null 時，`Culture` 會控制一些格式規範。例如，`"en-US"` 的 `"MMM"` 為 `"Jan", "Feb", "Mar", ...`，而 `"ru-RU"` 的 `"MMM"` 為 `"янв", "фев", "мар", ...`。當 `Format` 為 `null`，`Culture` 會控制要使用的預設格式。當 `Culture` 是 `null` 或已省略時，會使用 `Culture.Current`。

若要支援舊版工作流程，`options` 與 `culture` 也可以是文字值。這與 `options = [Format = options, Culture = culture]` 具有相同的行爲。


## Examples

### Example #1
將 `#date(2010, 12, 31)` 轉換爲 `text` 值。*結果輸出可能因目前文化特性而有所不同。*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
使用自訂格式和德文文化特性進行轉換。
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
在回曆中尋找對應於西曆 2000 年 1 月 1 日的年份。
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
