---
title: Lines.FromBinary
---

# Lines.FromBinary


Chuyển đổi giá trị nhị phân thành một danh sách giá trị văn bản được tách tại ngắt dòng. Nếu kiểu trích dẫn đã được chỉ định thì ngắt dòng có thể xuất hiện trong dấu ngoặc kép. Nếu includeLineSeparators là true thì ký tự ngắt dòng sẽ được bao gồm trong văn bản.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as any,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

Chuyển đổi giá trị nhị phân thành danh sách các giá trị văn bản được tách tại ngắt dòng.

-   `binary`: Giá trị nhị phân cần chuyển đổi thành danh sách.
-   `quoteStyle`: Xác định cách xử lý ngắt dòng. Giá trị của `quoteStyle` có thể là `null`. Giá trị mặc định là `QuoteStyle.None`.
-   `includeLineSeparators`: Xác định có bao gồm các ký tự ngắt dòng trong văn bản hay không. Giá trị của `includeLineSeparators` có thể là `null`. Giá trị mặc định là `false`.
-   `encoding`: Xác định mã hóa văn bản của giá trị nhị phân. Giá trị của `encoding` có thể là `null`. Giá trị mặc định là `65001` (UTF-8).

Nếu một bản ghi được chỉ định cho `quoteStyle` (và `includeLineSeparators` và `encoding` là `null`), các trường bản ghi sau đây có thể được cung cấp:

-   `QuoteStyle`: Xác định cách xử lý dấu ngắt dòng được trích dẫn.
    -   `QuoteStyle.Csv`: Dấu ngắt dòng được trích dẫn được coi là một phần của dữ liệu, không phải là phần cuối của hàng hiện tại.
    -   `QuoteStyle.None`: Tất cả các dấu ngắt dòng được coi là phần cuối của hàng hiện tại, ngay cả khi chúng xuất hiện bên trong giá trị được trích dẫn. Giá trị này là giá trị mặc định nếu tùy chọn `CsvStyle` không được chỉ định.
-   `CsvStyle`: Xác định cách xử lý dấu trích dẫn. Không nên sử dụng với `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Dấu trích dẫn trong một trường chỉ có ý nghĩa ngay sau `Dấu tách`.
    -   `CsvStyle.QuoteAlways`: Dấu trích dẫn trong trường luôn có ý nghĩa bất kể vị trí của chúng ở đâu.
-   `Dấu tách`: Dấu tách ký tự đơn. Chỉ nên sử dụng với `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Xác định có bao gồm các ký tự ngắt dòng trong văn bản hay không. Giá trị mặc định là `false`.
-   `Mã hóa`: Mã hóa văn bản của giá trị nhị phân. Giá trị mặc định là `65001` (UTF-8).



## Category
Lines
