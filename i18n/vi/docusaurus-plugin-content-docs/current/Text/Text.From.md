---
title: Text.From
---

# Text.From


Tạo một giá trị văn bản từ giá trị cho sẵn.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Trả về dạng thức biểu diễn bằng văn bản của <code>value</code>. <code>value</code> có thể là giá trị <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> hoặc <code>binary</code>.    Nếu giá trị cho sẵn là giá trị null thì <code>Text.From</code> sẽ trả về giá trị null. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Tạo một giá trị văn bản từ số 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
