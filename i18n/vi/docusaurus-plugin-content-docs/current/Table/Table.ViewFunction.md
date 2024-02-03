---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Tạo một hàm có thể được chặn bởi một trình xử lý được xác định trên một dạng xem (thông qua Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Tạo hàm dạng xem dựa trên <code>function</code> có thể được xử lý trong dạng xem tạo bởi <code>Table.View</code>.<br />Có thể sử dụng bộ xử lý <code>OnInvoke</code> của <code>Table.View</code> để xác định bộ xử lý cho hàm dạng xem.<br />Như với bộ xử lý cho các phép toán tích hợp, nếu không bộ xử lý <code>OnInvoke</code> nào được chỉ định, hoặc nếu bộ xử lý không xử lý hàm dạng xem, hoặc bộ xử lý phát sinh lỗi, <code>function</code> sẽ được áp dụng ở phía trên cùng của dạng xem.<br />Tham khảo tài liệu về trình kết nối tùy chỉnh Power Query được phát hành để biết mô tả đầy đủ hơn về <code>Table.View</code> và các hàm dạng xem tùy chỉnh.<br />



## Category
Table.Table construction
