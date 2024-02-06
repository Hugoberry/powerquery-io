---
title: Date.Day
---

# Date.Day


Trả về cấu phần ngày.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Trả về cấu phần ngày của giá trị <code>date</code>, <code>datetime</code>, hoặc <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code>, hoặc <code>datetimezone</code> mà từ đó cấu phần ngày được trích xuất.</li>      </ul>


## Examples

### Example #1 
Nhận cấu phần ngày của giá trị &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; hoặc &lt;code&gt;datetimezone&lt;/code&gt; biểu thị ngày và giờ là 5/14/2011 05:00:00 CH.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
