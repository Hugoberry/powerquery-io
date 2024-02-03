---
title: Duration.FromText
---

# Duration.FromText


## Description

Trả về một giá trị khoảng thời gian từ dạng thời gian đã trôi qua ở dạng thức văn bản (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Trả về một giá trị khoảng thời gian từ văn bản được chỉ định, <code>text</code>. Hàm này có thể phân tích cú pháp các định dạng sau:  <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Bao gồm tất cả các phạm vi)<br />        ddd: Số ngày.<br />        hh: Số giờ, từ 0 đến 23.<br />        mm: Số phút, từ 0 đến 59.<br />        ss: Số giây, từ 0 đến 59.<br />        ff: Phần của giây, từ 0 đến 9999999.


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; thành giá trị &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
