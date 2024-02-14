---
title: SparkPost.GetTable
---

# SparkPost.GetTable


Trả về bảng bao gồm số liệu có sẵn từ API SparkPost v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Remarks

Có thể sử dụng chức năng này để truy xuất dữ liệu từ một điểm cuối "Số liệu" cụ thể của API SparkPost phiên bản 1. Khi làm mới các bảng này hoặc thực hiện cuộc gọi tới API SparkPost bằng trình kết nối này, hãy nhớ rằng API SparkPost có hạn mức API nghiêm ngặt. Nếu máy chủ SparkPost đang trả về mã trạng thái 429, thì có nghĩa là bạn đã đạt đến hạn mức và sẽ phải chờ vài phút trước khi thực hiện lệnh gọi khác. Khi chọn giá trị cho tham số Số ngày, lưu ý rằng API chỉ lưu trữ dữ liệu trong vòng 6 tháng.


## Examples

### Example #1 
Truy xuất số liệu phân phối count_sent và count_rejected cho tất cả các campaign_ids được tổng hợp trong ba ngày gần đây nhất. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
bảng
```



