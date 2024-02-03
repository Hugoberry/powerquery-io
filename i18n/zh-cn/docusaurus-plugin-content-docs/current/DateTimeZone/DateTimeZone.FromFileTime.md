---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

从 64 位长度的数字创建 datetimezone。


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

从 <code>fileTime</code> 值创建 <code>datetimezone</code> 值并将其转换为本地时区。filetime 是一个 Windows 文件时间值，它表示自公元 1601 年 1 月 1 日协调世界时(UTC)午夜 12:00 后经过的 100 纳秒时间间隔的数目。    


## Examples

### Example #1 
将 &lt;code&gt;129876402529842245&lt;/code&gt; 转换为 datetimezone 值。
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
