---
title: Date.From
---

# Date.From


## Description

Tạo ngày từ giá trị cho sẵn.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Trả về giá trị <code>date</code> từ <code>value</code> cho sẵn. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").Nếu <code>value</code> cho sẵn là <code>null</code>, <code>Date.From</code> sẽ trả về <code>null</code>. Nếu <code>value</code> cho sẵn là <code>date</code> thì sẽ trả về <code>value</code>. Giá trị của các loại sau đây có thể được chuyển đổi thành giá trị <code>date</code>:      <ul>        <li><code>text</code>: Giá trị <code>date</code> từ dạng thức biểu diễn bằng văn bản. Tham khảo <code>Date.FromText</code> để biết chi tiết.</li>        <li><code>datetime</code>: Cấu phần ngày của <code>value</code>.</li>        <li><code>datetimezone</code>: Cấu phần ngày của datetime địa phương tương đương với <code>value</code>.</li>        <li><code>number</code>: Cấu phần ngày của datetime tương đương với Ngày tự động OLE được biểu thị bằng <code>value</code>.</li>      </ul>Nếu <code>value</code> thuộc một loại khác thì sẽ trả về lỗi.


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;43910&lt;/code&gt; thành giá trị &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Chuyển đổi &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; thành giá trị &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
