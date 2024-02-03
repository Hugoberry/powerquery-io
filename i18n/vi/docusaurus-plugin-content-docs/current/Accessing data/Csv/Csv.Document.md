---
title: Csv.Document
---

# Csv.Document


## Description

Trả về nội dung của tài liệu CSV ở dạng bảng.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Trả về nội dung của tài liệu CSV dưới dạng bảng.    <ul>      <li>        <code>columns</code> có thể rỗng, là số lượng cột, danh sách tên cột, loại bảng hoặc bản ghi tùy chọn.      </li>      <li>        <code>delimiter</code> có thể là ký tự đơn, danh sách ký tự hoặc giá trị <code>""</code>, cho biết các hàng nên được phân chia bằng các ký tự dấu cách liên tiếp. Mặc định: <code>","</code>.      </li>      <li>        Tham khảo <code>ExtraValues.Type</code> để biết các giá trị được hỗ trợ của <code>extraValues</code>.      </li>      <li>        <code>encoding</code> chỉ định loại mã hóa văn bản.      </li>    </ul>    Nếu một bản ghi được chỉ định cho <code>columns</code> (đồng thời <code>delimiter</code>, <code>extraValues</code> và <code>encoding</code> là rỗng), các trường bản ghi sau có thể được cung cấp:    <ul>      <li>        <code>Dấu phân cách</code>: Dấu phân cách cột. Mặc định: <code>","</code>.      </li>      <li>        <code>Cột</code>: Có thể là rỗng, là số lượng cột, danh sách tên cột hoặc loại cột. Nếu số lượng cột ít hơn số lượng tìm được trong đầu vào, các cột bổ sung sẽ bị bỏ qua. Nếu số lượng cột nhiều hơn số lượng tìm được trong đầu vào, các cột bổ sung sẽ là rỗng. Khi không được chỉ định, số lượng cột sẽ được xác định bằng dữ liệu tìm được trong đầu vào.      </li>      <li>        <code>Mã hóa</code>: Mã hóa văn bản tệp. Mặc định: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: Chỉ định cách xử lý trích dẫn.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (mặc định): Trích dẫn trong một trường chỉ quan trọng nếu theo ngay sau dấu phân tách.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: Trích dẫn trong một trường luôn quan trọng, bất kể vị trí xuất hiện.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Chỉ định cách xử lý ngắt dòng có trích dẫn.        <ul>          <li>            <code>QuoteStyle.Csv</code> (mặc định): Ngắt dòng có trích dẫn được coi là một phần của dữ liệu, không phải sự kết thúc của hàng hiện tại.          </li>          <li>            <code>QuoteStyle.None</code>: Tất cả ngắt dòng được coi là sự kết thúc của hàng hiện tại, ngay cả khi ngắt bên trong giá trị có trích dẫn.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Xử lý văn bản CSV có tiêu đề cột
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```




## Category
Accessing data
