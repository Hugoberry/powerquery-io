---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


Trả về một hàm tách văn bản thành danh sách văn bản bằng cách chuyển loại ký tự này thành loại ký tự khác. Các tham số \{0} và \{1} có thể là danh sách các ký tự hoặc hàm nhận một ký tự và trả về giá trị true/false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Remarks

Trả về một hàm tách văn bản thành danh sách văn bản bằng cách chuyển loại ký tự này thành loại ký tự khác. Các tham số <code>before</code> và <code>after</code> có thể là danh sách các ký tự hoặc hàm nhận một ký tự và trả về giá trị true/false.


## Examples

### Example #1 
Tách dữ liệu đầu vào tại bất kỳ vị trí nào có một chữ số đứng sau một chữ cái viết hoa hoặc chữ thường.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
