---
title: Number.FromText
---

# Number.FromText


## Description

Tạo số từ định dạng văn bản thông thường (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Trả về giá trị <code>số</code> từ giá trị văn bản cho sẵn, <code>text</code>. <ul>  <li><code>text</code>: Biểu diễn văn bản của một giá trị số. Biểu diễn phải ở định dạng số thông thường, chẳng hạn như "15", "3,423.10" hoặc "5.0E-10".</li>  <li><code>culture</code>: Một văn hóa tùy chọn kiểm soát cách <code>text</code> được diễn giải (ví dụ: "en-US").</li> </ul>


## Examples

### Example #1 
Nhận giá trị số của &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Nhận giá trị số của &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
