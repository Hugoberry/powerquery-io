---
title: Text.Combine
---

# Text.Combine


## Description

Ghép chuỗi danh sách giá trị văn bản thành một giá trị văn bản.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Trả về kết quả kết hợp danh sách giá trị văn bản, <code>texts</code>, thành một giá trị văn bản duy nhất. Mọi giá trị <code>null</code> xuất hiện trong <code>texts</code> đều bị bỏ qua.    <code>separator</code> tùy chọn được sử dụng trong văn bản kết hợp cuối cùng có thể được chỉ định.


## Examples

### Example #1 
Kết hợp các giá trị văn bản &#34;Seattle&#34; và &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Kết hợp các giá trị văn bản &#34;Seattle&#34; và &#34;WA&#34; được phân tách bằng một dấu phẩy và một dấu cách.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Kết hợp các giá trị &#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; và &#34;WA&#34;, được phân tách bằng một dấu phẩy và một dấu cách. (Lưu ý rằng &lt;code&gt;null&lt;/code&gt; bị bỏ qua.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
