---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

傳回週度結束時間。


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

傳回包含 <code>dateTime</code> 的週度結束時間。    這個函數可以接受選擇性的 <code>Day</code> <code>firstDayOfWeek</code>，以設定此相關計算中一週的第一天。預設值為 <code>Day.Sunday</code>。      <ul>        <li><code>dateTime</code>: 要計算週度結束時間的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值</li>        <li><code>firstDayOfWeek</code>: [選擇性]<i></i> 代表一週第一天的 <code>Day.Type</code> 值。可能的值包括 <code>Day.Sunday</code>、<code>Day.Monday</code>、<code>Day.Tuesday</code>、<code>Day.Wednesday</code>、<code>Day.Thursday</code>、<code>Day.Friday</code> 和 <code>Day.Saturday.</code>。預設值是 <code>Day.Sunday</code>。</li>      </ul>


## Examples

### Example #1 
取得 5/14/2011 這一週的結尾。
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
取得 5/17/2011 05:00:00 PM -7:00 這一週的結尾，而且一週的第一天是星期日。
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
