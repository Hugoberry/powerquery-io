---
title: Value.NativeQuery
---

# Value.NativeQuery


Đánh giá truy vấn so với mục tiêu.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

Đánh giá `query` dựa trên `target` bằng các tham số được chỉ định trong `parameters` và tùy chọn được chỉ định trong `options`.

Đầu ra của truy vấn được xác định bởi `target`.

`target` cung cấp ngữ cảnh cho thao tác được mô tả bởi `query`.

`query` mô tả truy vấn được triển khai dựa trên `target`. `query` được thể hiện theo cách cụ thể đối với `target` (ví dụ: câu lệnh T-SQL).

Giá trị `parameters` không bắt buộc có thể chứa danh sách hoặc bản ghi phù hợp để cung cấp các giá trị tham số theo dự kiến của `query`.

Bản ghi `options` không bắt buộc có thể chứa các tùy chọn ảnh hưởng đến hành vi đánh giá của `query` dựa trên `target`. Những tùy chọn này là cụ thể đối với `target`.



## Category
Values
