---
title: Xml.Tables
---

# Xml.Tables


ส่งกลับเนื้อหาของเอกสาร XML เป็นคอลเลกชันที่ซ้อนกันของตารางแบบระนาบเดียว


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

ส่งกลับเนื้อหาของเอกสาร XML เป็นคอลเลกชันที่ซ้อนกันของตารางแบบระนาบเดียว


## Examples

### Example #1 
เรียกใช้เนื้อหาของไฟล์ xml ภายใน
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
