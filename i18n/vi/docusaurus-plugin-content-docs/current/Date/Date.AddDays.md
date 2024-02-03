---
title: Date.AddDays
---

# Date.AddDays


## Description

Thêm các ngày được chỉ định vào ngày.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Trả về kết quả <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> khi thêm <code>numberOfDays</code> ngày vào giá trị <code>datetime</code><code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> mà các ngày đang được thêm.</li>      <li><code>numberOfDays</code>: Số ngày sẽ thêm.</li>      </ul>


## Examples

### Example #1 
Thêm 5 ngày vào giá trị &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; hoặc &lt;code&gt;datetimezone&lt;/code&gt; biểu thị ngày 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
