---
title: Table.Schema
---

# Table.Schema


Trả về một bảng chứa mô tả về cột (tức là giản đồ) của bảng được chỉ định.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Remarks

Trả về bảng mô tả các cột của <code>table</code>.<br />Mỗi hàng trong bảng mô tả các thuộc tính của cột trong <code>table</code>:<br /><table>  <tr>    <td><b>Tên cột</b></td>    <td><b>Mô tả</b></td>  </tr>  <tr>    <td><code>Tên</code></td>    <td>Tên cột.</td>  </tr>  <tr>    <td><code>Vị trí</code></td>    <td>Vị trí dựa trên 0 của cột trong <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Tên loại cột.</td>  </tr>  <tr>    <td><code>Kiểu</code></td>    <td>Kiểu của loại cột.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Liệu cột có thể chứa giá trị <code>null</code> hay không.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Cơ sở số (ví dụ: dựa trên 2 hoặc 10) của các trường <code>NumericPrecision</code> và <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Độ chính xác của cột số trong cơ sở được chỉ định bởi <code>NumericPrecisionBase</code>. Đây là số lượng chữ số tối đa có thể được thể hiện bằng một giá trị của loại này (bao gồm các chữ số phân số).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Quy mô của cột số trong cơ sở được chỉ định bởi <code>NumericPrecisionBase</code>. Đây là số lượng chữ số trong phần phân số của giá trị của loại này. Giá trị <code>0</code> thể hiện quy mô cố định mà không có chữ số phân số. Giá trị <code>null</code> thể hiện quy mô không xác định (do nổi hoặc không xác định).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Số lượng chữ số phân số tối đa trong phần giây của giá trị ngày và thời gian.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Số lượng ký tự tối đa được phép trong một cột <code>văn bản</code> hoặc số lượng byte được phép trong một cột <code>nhị phân</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Cho biết liệu cột này có thể thay đổi độ dài (tối đa <code>MaxLength</code>) hoặc có kích thước cố định.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Tên của loại cột trong hệ thống loại gốc của nguồn (ví dụ: <code>nvarchar</code> của SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Biểu thức mặc định của một giá trị trong cột này theo ngôn ngữ biểu thức gốc của nguồn (ví dụ: <code>42</code> hoặc <code>newid()</code> của SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Mô tả</code></td>    <td>Mô tả cột.</td>  </tr></table><br />



## Category
Table.Information
