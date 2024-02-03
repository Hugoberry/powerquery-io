---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Thêm các tháng được chỉ định vào ngày.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Trả về kết quả <code>date</code>, <code>datetime</code>, hoặc <code>datetimezone</code> khi thêm <code>numberOfMonths</code> tháng vào giá trị <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code>, hoặc <code>datetimezone</code> đã thêm số tháng vào.</li>        <li><code>numberOfMonths</code>: Số tháng cần thêm.</li>      </ul>


## Examples

### Example #1 
Thêm 5 tháng vào giá trị &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; hoặc &lt;code&gt;datetimezone&lt;/code&gt; biểu thị ngày 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Thêm 18 tháng vào giá trị &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; hoặc &lt;code&gt;datetimezone&lt;/code&gt; biểu thị ngày và giờ là 5/14/2011 08:15:22 SA.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
