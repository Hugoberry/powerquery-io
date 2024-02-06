---
title: Character.ToNumber
---

# Character.ToNumber


Chuyển đổi một ký tự thành giá trị số.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Trả về số tương đương với <code>character</code>.<br />    <br />    Kết quả sẽ là điểm mã Unicode 21 bit được biểu thị bằng ký tự được cung cấp hoặc cặp thay thế.  


## Examples

### Example #1 
Chuyển đổi một ký tự thành giá trị số tương đương.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Chuyển đổi cặp thay thế UTF-16 cho biểu tượng cảm xúc &#34;mặt cười toe toét&#34; thành điểm mã thập lục phân tương đương.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
