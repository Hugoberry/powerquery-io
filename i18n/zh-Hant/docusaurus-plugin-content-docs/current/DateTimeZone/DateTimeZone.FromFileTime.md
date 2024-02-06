---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


根據 64 位元長整數建立 datetimezone。


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

根據 <code>fileTime</code> 值建立 <code>datetimezone</code> 值，然後將其轉換成本地時區。filetime 是一個 Windows 檔案時間值，代表國際標準時間從西元 1601 年 1 月 1 日午夜 12:00 起已經過的 100 奈秒間隔數。    


## Examples

### Example #1 
將 &lt;code&gt;129876402529842245&lt;/code&gt; 轉換成 datetimezone 值。
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
