---
title: Text.Format
---

# Text.Format


從格式字串和引數傳回格式化文字。


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Remarks

傳回從清單或記錄將 <code>arguments</code> 套用至格式字串 <code>formatString</code> 而建立的格式化文字。也可提供選用的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
將數值清單格式化。
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
根據美國英文文化特性，將記錄中的不同資料類型格式化。
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
