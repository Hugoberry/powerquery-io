---
title: Csv.Document
---

# Csv.Document


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


## Remarks

Trả về nội dung của tài liệu CSV ở dạng bảng.

-   `columns` có thể là null, số cột, danh sách tên cột, loại bảng hoặc bản ghi tùy chọn.
-   `delimiter` có thể là một ký tự đơn, một danh sách ký tự hoặc giá trị `""`, điều này cho biết phải tách các hàng bằng các ký tự dấu cách liên tiếp. Mặc định: `","`.
-   Tham khảo `ExtraValues.Type` để biết các giá trị được hỗ trợ của `extraValues`.
-   `encoding` chỉ định loại mã hóa văn bản.

Nếu chỉ định một bản ghi cho `columns` (đồng thời `delimiter`, `extraValues` và `encoding` là null), các trường bản ghi sau đây có thể được cung cấp:

-   `Dấu tách`: Dấu tách cột ký tự đơn. Mặc định: `","`.
-   `Cột`: Có thể là null, số cột, danh sách tên cột hoặc loại bảng. Nếu số lượng cột ít hơn số lượng tìm được trong đầu vào, các cột bổ sung sẽ bị bỏ qua. Nếu số lượng cột nhiều hơn số lượng tìm được trong đầu vào, các cột bổ sung sẽ là null. Khi không được chỉ định, số cột sẽ được xác định theo những gì tìm thấy trong đầu vào.
-   `Encoding`: Mã hóa văn bản của tệp. Mặc định: 65001 (UTF-8).
-   `CsvStyle`: Chỉ định cách xử lý dấu trích dẫn.
    -   `CsvStyle.QuoteAfterDelimiter` (mặc định): Dấu trích dẫn trong trường chỉ có ý nghĩa khi ở ngay sau dấu tách.
    -   `CsvStyle.QuoteAlways`: Dấu trích dẫn trong trường luôn có ý nghĩa bất kể vị trí của chúng ở đâu.
-   `QuoteStyle`: Xác định cách xử lý dấu ngắt dòng được trích dẫn.
    -   `QuoteStyle.Csv` (mặc định): Dấu ngắt dòng được trích dẫn được coi là một phần của dữ liệu, không phải là phần cuối của hàng hiện tại.
    -   `QuoteStyle.None`: Tất cả các dấu ngắt dòng được coi là phần cuối của hàng hiện tại, ngay cả khi chúng xuất hiện bên trong giá trị được trích dẫn.
-   `IncludeByteOrderMark`: Giá trị logic cho biết có đưa Dấu thứ tự byte (BOM) vào phần đầu của đầu ra CSV không. Khi được đặt thành true, BOM sẽ được ghi (ví dụ: UTF-8 BOM: `0xEF 0xBB 0xBF`); khi được đặt thành false, không BOM nào được đưa vào. Tùy chọn này chỉ áp dụng trong trường hợp của đầu ra. Mặc định là `false`.
-   `ExtraValues`: Tham khảo `ExtraValues.Type` để biết các giá trị được hỗ trợ của ExtraValues.


## Examples

### Example #1
Xử lý văn bản CSV có tiêu đề cột.
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


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
