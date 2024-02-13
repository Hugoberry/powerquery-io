---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Trả về một định dạng nhị phân đọc một giá trị văn bản.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Trả về một định dạng nhị phân đọc một giá trị văn bản.  <code>length</code> chỉ định số lượng byte để giải mã hoặc định dạng nhị phân có độ dài đứng trước văn bản.  Giá trị <code>encoding</code> tùy chọn chỉ định việc mã hóa của văn bản.  Nếu <code>encoding</code> không được chỉ định thì mã hóa được xác định từ dấu thứ tự byte Unicode.  Nếu không có dấu thứ tự byte nào thì sẽ sử dụng  <code>TextEncoding.Utf8</code>.


## Examples

### Example #1 
Giải mã hai byte ở dạng văn bản ASCII.
```powerquery
let
    binaryData = #binary({65, 66, 67}),
    textFormat = BinaryFormat.Text(2, TextEncoding.Ascii)
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```


### Example #2 
Giải mã văn bản ASCII nơi độ dài của văn bản tính bằng byte xuất hiện trước văn bản ở dạng byte.
```powerquery
let
    binaryData = #binary({2, 65, 66}),
    textFormat = BinaryFormat.Text(
        BinaryFormat.Byte,
        TextEncoding.Ascii
    )
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```




## Category
Binary Formats.Reading text
