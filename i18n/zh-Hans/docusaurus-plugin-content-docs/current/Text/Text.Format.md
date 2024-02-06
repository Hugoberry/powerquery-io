---
title: Text.Format
---

# Text.Format


从格式字符串和参数返回格式化文本。


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Remarks

返回通过将来自列表或记录的 <code>arguments</code> 应用于格式字符串 <code>formatString</code> 创建的格式化文本。还可提供可选的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
设置数字列表格式。
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
根据美国英语区域性设置记录中的不同数据类型的格式。
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
