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

Đánh giá <code>query</code> dựa trên <code>target</code> bằng các tham số được chỉ định trong <code>parameters</code> và tùy chọn được chỉ định trong <code>options</code>.<br />Đầu ra của truy vấn được xác định bởi <code>target</code>.<br /><code>target</code> cung cấp ngữ cảnh cho thao tác được mô tả bởi <code>query</code>.<br /><code>query</code> mô tả truy vấn được triển khai dựa trên <code>target</code>. <code>query</code> được thể hiện theo cách cụ thể đối với <code>target</code> (ví dụ: câu lệnh T-SQL).<br />Giá trị <code>parameters</code> không bắt buộc có thể chứa danh sách hoặc bản ghi phù hợp để cung cấp các giá trị tham số theo dự kiến của <code>query</code>.<br />Bản ghi <code>options</code> không bắt buộc có thể chứa các tùy chọn ảnh hưởng đến hành vi đánh giá của <code>query</code> dựa trên <code>target</code>. Những tùy chọn này là cụ thể đối với <code>target</code>.<br />



## Category
Values
