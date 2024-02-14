---
title: BinaryFormat.Text
---

# BinaryFormat.Text


ส่งกลับรูปแบบไบนารีที่อ่านค่าข้อความ


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

ส่งกลับรูปแบบไบนารีที่อ่านค่าข้อความ <code>length</code> ระบุจํานวนไบต์ที่จะถอดรหัส หรือรูปแบบไบนารีของความยาวที่อยู่ก่อนหน้าข้อความ ค่า <code>encoding</code> ที่เลือกได้จะระบุการเข้ารหัสของข้อความ ถ้าไม่ได้ระบุ <code>encoding</code> การเข้ารหัสจะถูกกําหนดจากเครื่องหมายการจัดลำดับไบต์ Unicode ถ้าไม่มีเครื่องหมายการจัดลําดับไบต์ แสดงว่ามีการใช้ <code>TextEncoding.Utf8</code>


## Examples

### Example #1 
ถอดรหัสสองไบต์เป็นข้อความ ASCII
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
ถอดรหัสข้อความ ASCII ที่ความยาวของข้อความในหน่วยไบต์ปรากฏก่อนข้อความเป็นไบต์
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
