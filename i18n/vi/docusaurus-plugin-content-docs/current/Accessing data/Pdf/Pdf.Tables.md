---
title: Pdf.Tables
---

# Pdf.Tables


Trả về bất kỳ bảng nào được tìm thấy trong tệp PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Trả về mọi bảng tìm thấy trong <code>pdf</code>. Có thể cung cấp tham số bản ghi tùy chọn, <code>options</code>, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa những trường sau:    <ul><li><code>Implementation</code> : Phi&#234;n bản thuật to&#225;n đ&#234;̉ dùng khi x&#225;c định c&#225;c bảng. C&#225;c phi&#234;n bản cũ chỉ khả dụng cho t&#237;nh tương th&#237;ch ngược, để ngăn c&#225;c truy vấn cũ bị hỏng bởi c&#225;c bản cập nhật thuật to&#225;n. Phi&#234;n bản mới nhất phải lu&#244;n mang lại kết quả tốt nhất. Gi&#225; trị hợp lệ l&#224; &quot;1.3&quot;, &quot;1.2&quot;, &quot;1.1&quot; hoặc null.</li><li><code>StartPage</code> : Chỉ định trang đầu ti&#234;n trong phạm vi trang cần kiểm tra. Mặc định: 1.</li><li><code>EndPage</code> : Chỉ định trang cuối trong phạm vi trang cần kiểm tra. Mặc định: trang cuối của t&#224;i liệu.</li><li><code>MultiPageTables</code> : Kiểm tra xem những bảng tương tự tr&#234;n c&#225;c trang li&#234;n tiếp c&#243; tự động kết hợp th&#224;nh một bảng duy nhất kh&#244;ng. Mặc định: true.</li><li><code>EnforceBorderLines</code> : Kiểm tra xem đường viền c&#243; lu&#244;n được &#225;p dụng l&#224;m ranh giới &#244; (nếu l&#224; true) kh&#244;ng hay chỉ l&#224; một trong số nhiều gợi &#253; để x&#225;c định ranh giới &#244; (nếu l&#224; false). Mặc định: false.</li></ul>    


## Examples

### Example #1 
Trả về bảng có chứa trong sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#bảng({"Name", "Kind", "Data"}, ...)
```




## Category
Truy cập vào dữ liệu
