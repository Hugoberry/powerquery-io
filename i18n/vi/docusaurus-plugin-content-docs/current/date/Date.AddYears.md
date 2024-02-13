---
title: Date.AddYears
---

# Date.AddYears


Thêm các năm được chỉ định vào ngày.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Trả về kết quả <code>date</code>, <code>datetime</code>, hoặc <code>datetimezone</code> khi thêm <code>numberOfYears</code> vào giá trị <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code>, hoặc <code>datetimezone</code> đã thêm năm vào.</li>        <li><code>numberOfYears</code>: Số năm cần thêm.</li>      </ul>


## Examples

### Example #1 
Thêm 4 năm vào giá trị &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; hoặc &lt;code&gt;datetimezone&lt;/code&gt; biểu thị giá trị 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Thêm 10 năm vào giá trị &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; hoặc &lt;code&gt;datetimezone&lt;/code&gt; biểu thị ngày và giờ là 5/14/2011 08:15:22 SA.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
