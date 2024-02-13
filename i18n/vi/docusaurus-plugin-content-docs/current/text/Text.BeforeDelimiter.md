---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Trả về phần của <code>text</code> trước <code>delimiter</code> được chỉ định.    <code>index</code> dạng số tùy chọn cho biết lần xuất hiện nào của <code>delimiter</code> sẽ được xem xét.    Danh sách tùy chọn <code>index</code> cho biết lần xuất hiện nào của <code>delimiter</code> sẽ được xem xét, cũng như việc đánh chỉ mục có được thực hiện tính từ phần đầu hoặc cuối của đầu vào hay không.


## Examples

### Example #1 
Lấy phần của &#34;111-222-333&#34; trước gạch nối (đầu tiên).
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Lấy phần của &#34;111-222-333&#34; trước gạch nối thứ hai.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Lấy phần của &#34;111-222-333&#34; trước gạch nối thứ hai tính từ cuối.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
