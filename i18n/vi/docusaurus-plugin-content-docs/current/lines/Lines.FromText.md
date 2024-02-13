---
title: Lines.FromText
---

# Lines.FromText


Chuyển đổi một giá trị văn bản thành một danh sách các giá trị văn bản được phân tách tại ngắt dòng. Nếu includeLineSeparators là true thì ký tự ngắt dòng sẽ được đưa vào văn bản.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Chuyển đổi một giá trị văn bản thành một danh sách các giá trị văn bản được phân tách tại ngắt dòng. Nếu includeLineSeparators là true, thì ký tự ngắt dòng sẽ được đưa vào văn bản.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (mặc định) Không cần hoạt động trích dẫn nào.</li>            <li><code>QuoteStyle.Csv:</code> Trích dẫn ở dạng Csv. Ký tự dấu ngoặc kép được sử dụng để phân ranh giới các khu vực này và một cặp ký tự dấu ngoặc kép được sử dụng để cho biết một ký tự dấu ngoặc kép trong một khu vực này. </li>          </ul>        </div>    



## Category
Lines
