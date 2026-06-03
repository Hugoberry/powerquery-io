---
title: List.Percentile
---

# List.Percentile


Trả về một hoặc nhiều phân vị mẫu tương ứng với các xác suất đã cho.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Trả về một hoặc nhiều phân vị mẫu của danh sách `list`. Nếu giá trị `percentiles` là một số trong khoảng 0,0 và 1,0 thì giá trị này sẽ được coi là phân vị và kết quả sẽ là một giá trị tương ứng với xác suất đó. Nếu giá trị `percentiles` là một danh sách chứa các số có giá trị trong khoảng từ 0,0 đến 1,0 thì kết quả sẽ là danh sách các phân vị tương ứng với xác suất đầu vào.  
  
Người dùng nâng cao có thể sử dụng tùy chọn PercentileMode trong `options` để chọn một phương pháp nội suy cụ thể hơn, nhưng chúng tôi không khuyến khích phần lớn người dùng sử dụng tùy chọn này. Biểu tượng xác định sẵn `PercentileMode.ExcelInc` và `PercentileMode.ExcelExc` khớp với các phương pháp nội suy được các hàm Excel sử dụng `PERCENTILE.INC` và `PERCENTILE.EXC`. Hành vi mặc định khớp với `PercentileMode.ExcelInc`. Các biểu tượng `PercentileMode.SqlCont` và `PercentileMode.SqlDisc` lần lượt khớp với hành vi SQL Server của `PERCENTILE_CONT` và `PERCENTILE_DISC`.


## Examples

### Example #1
Tìm tứ phân vị đầu tiên của danh sách `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Tìm tứ phân vị của danh sách `{5, 3, 1, 7, 9}` bằng cách sử dụng phương pháp nội suy khớp với `PERCENTILE.EXC` của Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
