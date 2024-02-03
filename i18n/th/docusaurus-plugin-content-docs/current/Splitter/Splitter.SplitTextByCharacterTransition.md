---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการข้อความตามการเปลี่ยนจากอักขระชนิดหนึ่งไปยังอีกชนิดหนึ่ง พารามิเตอร์ \{0} และ \{1} อาจเป็นรายการอักขระ หรือฟังก์ชันที่ใช้อักขระ และส่งกลับค่า จริง/เท็จ ได้


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการข้อความตามการเปลี่ยนจากอักขระชนิดหนึ่งไปยังอีกชนิดหนึ่ง พารามิเตอร์ <code>before</code> และ <code>after</code> อาจเป็นรายการอักขระ หรือฟังก์ชันที่ใช้อักขระ และส่งกลับค่า จริง/เท็จ ได้


## Examples

### Example #1 
แยกข้อมูลป้อนเข้าเมื่อใดก็ตามที่มีอักษรตัวพิมพ์ใหญ่หรือตัวพิมพ์เล็กตามด้วยตัวเลข
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
