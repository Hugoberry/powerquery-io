---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Trả về cơ sở dữ liệu Analysis Services trên máy chủ cụ thể.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Trả về cơ sở dữ liệu về phiên bản Analysis Services, <code>server</code>.  Có thể cung cấp tham số bản ghi tùy chọn, <code>options</code>, để chỉ định thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:    <ul><li><code>TypedMeasureColumns</code> : Gi&#225; trị l&#244;-gic cho biết liệu c&#225;c loại được chỉ định trong m&#244; h&#236;nh dạng bảng hoặc đa chiều c&#243; được sử dụng cho c&#225;c loại cột gi&#225; trị đo đ&#227; th&#234;m hay kh&#244;ng. Khi đặt th&#224;nh false, loại &quot;số&quot; sẽ được sử dụng cho tất cả c&#225;c cột gi&#225; trị đo. Gi&#225; trị mặc định cho t&#249;y chọn n&#224;y l&#224; false.</li><li><code>Culture</code> : T&#234;n ng&#244;n ngữ chỉ định ng&#244;n ngữ cho dữ liệu. Thuộc t&#237;nh n&#224;y tương ứng với thuộc t&#237;nh chuỗi kết nối &#39;M&#227; định danh cục bộ&#39;.</li><li><code>CommandTimeout</code> : Khoảng thời gian kiểm so&#225;t thời lượng truy vấn ph&#237;a m&#225;y chủ được phép chạy trước khi bị hủy bỏ. Gi&#225; trị mặc định phụ thuộc v&#224;o tr&#236;nh điều khiển.</li><li><code>ConnectionTimeout</code> : Khoảng thời gian kiểm so&#225;t thời gian chờ trước khi từ bỏ nỗ lực kết nối với m&#225;y chủ. Gi&#225; trị mặc định phụ thuộc v&#224;o tr&#236;nh điều khiển.</li><li><code>SubQueries</code> : Số (0, 1 hoặc 2) đặt gi&#225; trị của thuộc t&#237;nh &quot;SubQueries&quot; trong chuỗi kết nối. Gi&#225; trị n&#224;y kiểm so&#225;t h&#224;nh động của c&#225;c th&#224;nh phần được t&#237;nh tr&#234;n mục chọn ri&#234;ng hoặc mục k&#253; hiệu phụ. (Gi&#225; trị mặc định l&#224; 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
