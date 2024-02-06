---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Remarks

Có thể sử dụng chức năng này để gọi bất kỳ điểm cuối "Danh sách" nào mà API SparkPost phiên bản 1 cung cấp. Khi thực hiện cuộc gọi tới API SparkPost bằng chức năng này, hãy nhớ rằng API SparkPost có hạn mức API nghiêm ngặt. Nếu máy chủ SparkPost đang trả về mã trạng thái 429, thì có nghĩa là bạn đã đạt đến hạn mức và sẽ phải chờ vài phút trước khi thực hiện cuộc gọi khác.


## Examples

### Example #1 
Trả về bảng có duy nhất một cột đã điền sẵn dữ liệu từ một trong các điểm cuối &#34;Danh sách&#34; của API SparkPost phiên bản 1 (xem tài liệu về SparkPost để biết thông tin chi tiết).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



