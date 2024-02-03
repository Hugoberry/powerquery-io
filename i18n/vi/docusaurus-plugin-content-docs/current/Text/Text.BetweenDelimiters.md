---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Details

Trả về phần của <code>text</code> giữa <code>startDelimiter</code> và <code>endDelimiter</code> được chỉ định.    <code>startIndex</code> dạng số tùy chỉnh cho biết số lần xuất hiện của <code>startDelimiter</code> sẽ được xem xét.    Danh sách tùy chọn <code>startIndex</code> cho biết lần xuất hiện nào của <code>startDelimiter</code> sẽ được xem xét, cũng như việc đánh chỉ mục có được thực hiện tính từ đầu hoặc cuối của đầu vào hay không.    <code>endIndex</code> cũng tương tự, ngoại trừ việc đánh chỉ mục được thực hiện có liên quan đến <code>startIndex</code>.


## Examples

### Example #1 
Lấy phần của &#34;111 (222) 333 (444)&#34; giữa dấu ngoặc tròn mở (đầu tiên) và ngoặc tròn đóng (đầu tiên) tiếp theo.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Lấy phần của &#34;111 (222) 333 (444)&#34; giữa dấu ngoặc tròn mở thứ hai và dấu ngoặc tròn đóng đầu tiên tiếp theo.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Lấy phần của &#34;111 (222) 333 (444)&#34; giữa dấu ngoặc tròn mở thứ hai tính từ cuối và dấu ngoặc tròn đóng thứ hai tiếp theo.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
