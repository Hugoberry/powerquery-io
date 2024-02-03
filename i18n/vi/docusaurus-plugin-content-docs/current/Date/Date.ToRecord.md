---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Trả về một bản ghi chứa các phần của giá trị ngày.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Trả về một bản ghi chứa các phần của giá trị ngày cho sẵn, <code>date</code>. <ul>        <li><code>date</code>: Một giá trị <code>date</code> nơi bản ghi các phần của giá trị đó sẽ được tính.</li>      </ul>


## Examples

### Example #1 
Chuyển đổi giá trị &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; thành một bản ghi chứa các phần từ giá trị ngày.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
