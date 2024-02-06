---
title: Function.ScalarVector
---

# Function.ScalarVector


Tạo hàm vô hướng ở đầu hàm vec-tơ, phân lô nhiều viện dẫn.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Trả về một hàm vô hướng thuộc loại <code>scalarFunctionType</code> gọi <code>vectorFunction</code> cùng với một hàng đối số và trả về dữ liệu xuất đơn. Thêm vào đó, khi áp dụng nhiều lần hàm vô hướng cho từng hàng của bảng nhập, chẳng hạn như trong Table.AddColumn, thì <code>vectorFunction</code> sẽ được áp dụng một lần cho toàn bộ dữ liệu nhập.<br /><code>vectorFunction</code> sẽ được chuyển qua một bảng có cùng tên cột và vị trí của tham số <code>scalarFunctionType</code>. Mỗi hàng của bảng này chứa các đối số cho một lệnh gọi tới hàm vô hướng, cùng với các cột tương ứng với những thông số <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> phải trả về danh sách có cùng độ dài với bảng nhập, trong đó mục ở mỗi vị trí phải có cùng kết quả với đánh giá hàm vô hướng trên hàng nhập của chính vị trí đó.<br />Theo dự kiến, bảng nhập sẽ được đưa vào, vì vậy, <code>vectorFunction</code> dự kiến sẽ đưa vào dữ liệu xuất dưới dạng dữ liệu nhập, chỉ hoạt động với một khúc dữ liệu nhập mỗi lần. Cụ thể là, <code>vectorFunction</code> không được liệt kê bảng nhập nhiều lần.<br />



## Category
Function
