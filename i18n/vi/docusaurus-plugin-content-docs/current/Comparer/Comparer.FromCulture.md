---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Trả về hàm so sánh dựa trên văn hóa được chỉ định và phân biệt chữ hoa chữ thường.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Trả về hàm so sánh sử dụng <code>culture</code> và phân biệt chữ hoa chữ thường do <code>ignoreCase</code> xác định để thực hiện phép so sánh.<br />      <br />      Hàm so sánh trả về giá trị -1, 0 hoặc 1 dựa trên việc giá trị đầu tiên nhỏ hơn, bằng hay lớn hơn giá trị thứ hai.<br />      <br />      Giá trị mặc định của <code>ignoreCase</code> là false. <code>culture</code> sẽ là một trong các khu vực được .NET framework hỗ trợ (ví dụ như "en-US").    


## Examples

### Example #1 
So sánh &#34;a&#34; và &#34;A&#34; bằng ngôn ngữ &#34;vi-VN&#34; để xác định xem các giá trị có bằng nhau hay không.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
So sánh &#34;a&#34; và &#34;A&#34; bằng ngôn ngữ &#34;vi-VN&#34; bỏ qua dạng chữ để xác định xem các giá trị có bằng nhau hay không.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
