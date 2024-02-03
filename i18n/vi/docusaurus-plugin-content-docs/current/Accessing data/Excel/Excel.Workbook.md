---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Trả về nội dung của sổ làm việc Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Trả về nội dung của sổ làm việc Excel.    <ul>     <li> <code>useHeaders</code> có thể là null, giá trị lô-gic (true/false) cho biết hàng đầu tiên của mỗi bảng được trả về nên được coi là tiêu đề hay bản ghi tùy chọn. Mặc định: false.</li>     <li> <code>delayTypes</code> có thể là null hoặc giá trị lô-gic (true/false) cho biết có giữ nguyên trạng thái không phân loại của các cột thuộc mỗi bảng được trả về hay không. Mặc định: false.</li>    </ul>    Nếu bản ghi được chỉ định cho <code>useHeaders</code> (và <code>delayTypes</code> là null), các trường bản ghi sau đây có thể được cung cấp:    <ul>     <li> <code>UseHeaders</code>: Có thể là null hoặc một giá trị lô-gic (true/false) cho biết hàng đầu tiên của mỗi bảng được trả về có được coi là tiêu đề không. Mặc định: false.</li>     <li> <code>DelayTypes</code>: Có thể là null hoặc giá trị lô-gic (true/false) cho biết có giữ nguyên trạng thái không phân loại của các cột thuộc mỗi bảng được trả về hay không. Mặc định: false.</li>     <li> <code>InferSheetDimensions</code>: Có thể là null hoặc giá trị lô-gic (true/false) cho biết vùng trang tính chứa dữ liệu có được suy ra bằng cách đọc chính trang tính, thay vì đọc siêu dữ liệu chiều từ tệp hay không. Điều này có thể hữu ích trong các trường hợp siêu dữ liệu chiều không chính xác. Lưu ý rằng tùy chọn này chỉ được hỗ trợ cho các tệp Excel Open XML chứ không được hỗ trợ cho các tệp Excel cũ. Mặc định: false.</li>    </ul>    


## Examples

### Example #1 
Trả về nội dung của Sheet1 từ sổ làm việc Excel.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
