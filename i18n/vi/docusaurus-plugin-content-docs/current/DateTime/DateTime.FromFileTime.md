---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Tạo một datetime từ một số dài 64 bit.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Tạo một giá trị <code>datetime</code> từ giá trị <code>fileTime</code> và chuyển đổi giá trị đó thành múi giờ địa phương. Filetime là giá trị thời gian tệp của Windows biểu thị số lượng quãng cách 100 nano giây đã trôi qua kể từ 12:00 giờ đêm, ngày 1 tháng 1 năm 1601 SCN. (C.E.) Giờ Quốc tế Phối hợp (UTC).


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;129876402529842245&lt;/code&gt; thành giá trị datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
