---
title: Lines.FromText
---

# Lines.FromText


Chuyển đổi một giá trị văn bản thành một danh sách các giá trị văn bản được phân tách tại ngắt dòng. Nếu includeLineSeparators là true thì ký tự ngắt dòng sẽ được đưa vào văn bản.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Chuyển đổi giá trị văn bản thành danh sách các giá trị văn bản được tách tại ngắt dòng.

-   `text`: Giá trị văn bản cần chuyển đổi thành danh sách giá trị văn bản.
-   `quoteStyle`: Xác định cách xử lý ngắt dòng. Giá trị của `quoteStyle` có thể là `null`. Giá trị mặc định là `QuoteStyle.None`.
-   `includeLineSeparators`: Xác định có bao gồm các ký tự ngắt dòng trong văn bản hay không. Giá trị của `includeLineSeparators` có thể là `null`. Giá trị mặc định là `false`.

Nếu một bản ghi được chỉ định cho `quoteStyle` (và `includeLineSeparators` là `null`), các trường bản ghi sau đây có thể được cung cấp:

-   `QuoteStyle`: Xác định cách xử lý dấu ngắt dòng được trích dẫn.
    -   `QuoteStyle.Csv`: Dấu ngắt dòng được trích dẫn được coi là một phần của dữ liệu, không phải là phần cuối của hàng hiện tại.
    -   `QuoteStyle.None`: Tất cả các dấu ngắt dòng được coi là phần cuối của hàng hiện tại, ngay cả khi chúng xuất hiện bên trong giá trị được trích dẫn. Giá trị này là giá trị mặc định nếu tùy chọn `CsvStyle` không được chỉ định.
-   `CsvStyle`: Xác định cách xử lý dấu trích dẫn. Không nên sử dụng với `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Dấu trích dẫn trong một trường chỉ có ý nghĩa ngay sau `Dấu tách`.
    -   `CsvStyle.QuoteAlways`: Dấu trích dẫn trong trường luôn có ý nghĩa bất kể vị trí của chúng ở đâu.
-   `Dấu tách`: Dấu tách ký tự đơn. Chỉ nên sử dụng với `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Xác định có bao gồm các ký tự ngắt dòng trong văn bản hay không. Giá trị mặc định là `false`.



## Category
Lines
