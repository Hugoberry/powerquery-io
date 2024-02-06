---
title: Character.FromNumber
---

# Character.FromNumber


Chuyển đổi số thành ký tự văn bản.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Trả về ký tự tương đương với số.<br />    <br />    <code>number</code> được cung cấp phải là điểm mã Unicode 21 bit.


## Examples

### Example #1 
Chuyển đổi một số thành giá trị ký tự tương đương.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Chuyển đổi một ký tự thành số và quay lại.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Chuyển đổi điểm mã thập lục phân cho biểu tượng cảm xúc &#34;mặt cười toe toét&#34; thành cặp thay thế UTF-16 tương đương.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
