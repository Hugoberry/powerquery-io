---
title: List.Percentile
---

# List.Percentile


## Description

Trả về một hoặc nhiều phân vị mẫu tương ứng với các xác suất đã cho.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Trả về một hoặc nhiều phân vị mẫu của danh sách <code>list</code>. Nếu giá trị <code>percentiles</code> là một số trong khoảng 0,0 và 1,0 thì giá trị này sẽ được coi là phân vị và kết quả sẽ là    một giá trị tương ứng với xác suất đó. Nếu giá trị <code>percentiles</code> là một danh sách chứa các số có giá trị trong khoảng từ 0,0 đến 1,0 thì kết quả sẽ là danh sách các phân vị    tương ứng với xác suất đầu vào. Người dùng nâng cao có thể sử dụng tùy chọn PercentileMode trong <code>options</code> để chọn một phương pháp nội suy cụ thể hơn, nhưng chúng tôi không khuyến khích phần lớn người dùng sử dụng tùy chọn này.    Biểu tượng xác định sẵn <code>PercentileMode.ExcelInc</code> và <code>PercentileMode.ExcelExc</code> khớp với các phương pháp nội suy được các hàm Excel sử dụng    <code>PERCENTILE.INC</code> và <code>PERCENTILE.EXC</code>. Hành vi mặc định khớp với <code>PercentileMode.ExcelInc</code>. Các biểu tượng    <code>PercentileMode.SqlCont</code> và <code>PercentileMode.SqlDisc</code> lần lượt khớp với hành vi SQL Server của <code>PERCENTILE_CONT</code> và    <code>PERCENTILE_DISC</code>.  


## Examples

### Example #1 
Tìm tứ phân vị đầu tiên của danh sách &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Tìm tứ phân vị của danh sách &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; bằng cách sử dụng phương pháp nội suy khớp với &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; của Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
