---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

แปลงค่าไบนารีเป็นรายการค่าข้อความที่แบ่งด้วยตัวแบ่งบรรทัด  ถ้ามีการระบุตัวคั่น ตัวแบ่งบรรทัดอาจปรากฏในเครื่องหมายอัญประกาศ  ถ้า includeLineSeparators เป็นจริง อักขระตัวแบ่งบรรทัดจะรวมอยู่ในข้อความ


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Details

แปลงค่าไบนารีเป็นรายการค่าข้อความที่แบ่งด้วยตัวแบ่งบรรทัด  ถ้ามีการระบุตัวคั่น ตัวแบ่งบรรทัดอาจปรากฏในเครื่องหมายอัญประกาศ  ถ้า includeLineSeparators เป็นจริง อักขระตัวแบ่งบรรทัดจะรวมอยู่ในข้อความ



## Category
Lines
