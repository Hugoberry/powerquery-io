---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Trả về một số từ 28 tới 31 biểu thị số ngày trong tháng.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Trả về số ngày trong tháng trong giá trị <code>date</code>, <code>datetime</code>, hoặc <code>datetimezone</code> <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code>, hoặc <code>datetimezone</code> mà từ đó trả về số ngày trong tháng.</li>      </ul>


## Examples

### Example #1 
Số ngày trong tháng Mười Hai như được biểu thị bởi &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
