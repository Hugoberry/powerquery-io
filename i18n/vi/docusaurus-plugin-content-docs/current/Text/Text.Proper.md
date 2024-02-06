---
title: Text.Proper
---

# Text.Proper


Viết hoa chữ cài đầu tiên của mỗi từ.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Trả về kết quả chỉ viết hoa chữ cái đầu tiên của mỗi từ trong giá trị văn bản <code>text</code>. Tất cả chữ cái khác được trả về ở dạng chữ thường. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Sử dụng &lt;code&gt;Text.Proper&lt;/code&gt; cho câu đơn giản.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
