---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Remarks

Truy xuất các bảng mà trình kết nối SparkPost cung cấp, được điền sẵn dữ liệu tổng hợp trong số ngày do người dùng chỉ định. Khi làm mới các bảng hoặc thực hiện cuộc gọi tới API SparkPost bằng trình kết nối này, hãy nhớ rằng API SparkPost có hạn mức API nghiêm ngặt. Nếu máy chủ SparkPost đang trả về mã trạng thái 429, thì có nghĩa là bạn đã đạt đến hạn mức và sẽ phải chờ vài phút trước khi thực hiện cuộc gọi khác. Khi lựa chọn giá trị cho tham số Số ngày, lưu ý rằng API chỉ lưu trữ dữ liệu trong vòng 6 tháng.


