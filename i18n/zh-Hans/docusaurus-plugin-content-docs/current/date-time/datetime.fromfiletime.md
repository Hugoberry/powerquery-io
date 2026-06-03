---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


从 64 位长度的数字创建日期时间。


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

从 `fileTime` 值创建一个 `datetime` 值并且将其转换为本地时区。filetime 是一个 Windows 文件时间值，它表示自公元 1601 年 1 月 1 日(C.E.)通用协调时间(UTC)午夜 12:00 后 经过的 100 纳秒时间间隔的数目。


## Examples

### Example #1
将 `129876402529842245` 转换为日期时间值。
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
