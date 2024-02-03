---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Thêm các quý được chỉ định vào ngày.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Trả về kết quả <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> khi thêm <code>numberOfQuarters</code> quý vào giá trị <code>datetime</code><code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> mà các quý đang được thêm.</li>      <li><code>numberOfQuarters</code>: Số quý sẽ thêm.</li>      </ul>


## Examples

### Example #1 
Thêm 1 quý vào giá trị &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; hoặc &lt;code&gt;datetimezone&lt;/code&gt; biểu thị ngày 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
