---
title: Date.AddWeeks
---

# Date.AddWeeks


Thêm các tuần được chỉ định vào ngày.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Trả về kết quả <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> khi thêm <code>numberOfWeeks</code> tuần vào giá trị <code>datetime</code><code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> mà các tuần đang được thêm.</li>      <li><code>numberOfWeeks</code>: Số tuần sẽ thêm.</li>      </ul>


## Examples

### Example #1 
Thêm 2 tuần vào giá trị &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; hoặc &lt;code&gt;datetimezone&lt;/code&gt; biểu thị ngày 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
