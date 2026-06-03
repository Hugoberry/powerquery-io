---
title: Lines.FromBinary
---

# Lines.FromBinary


แปลงค่าไบนารีเป็นรายการค่าข้อความที่แบ่งด้วยตัวแบ่งบรรทัด ถ้ามีการระบุตัวคั่น ตัวแบ่งบรรทัดอาจปรากฏในเครื่องหมายอัญประกาศ ถ้า includeLineSeparators เป็นจริง อักขระตัวแบ่งบรรทัดจะรวมอยู่ในข้อความ


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as any,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

แปลงค่าไบนารีเป็นรายการของค่าข้อความที่แยกที่ตัวแบ่งบรรทัด

-   `binary`: ค่าไบนารีที่จะแปลงเป็นรายการ
-   `quoteStyle`: ระบุวิธีการจัดการตัวแบ่งบรรทัด ค่าของ `quoteStyle` สามารถเป็น `null` ค่าเริ่มต้นคือ `QuoteStyle.None`
-   `includeLineSeparators`: ระบุว่าจะรวมอักขระตัวแบ่งบรรทัดในข้อความหรือไม่ ค่าของ `includeLineSeparators` สามารถเป็น `null` ค่าเริ่มต้นคือ `false`
-   `encoding`: ระบุการเข้ารหัสข้อความของค่าไบนารี ค่าของ `encoding` สามารถเป็น `null` ค่าเริ่มต้นคือ `65001` (UTF-8)

ถ้ามีการระบุระเบียนสําหรับ `quoteStyle` (และ `includeLineSeparators` และ `encoding` คือ `null`) จะสามารถระบุเขตข้อมูลระเบียนต่อไปนี้ได้:

-   `QuoteStyle`: ระบุวิธีจัดการตัวแบ่งบรรทัดที่อ้างอิง
    -   `QuoteStyle.Csv`: ตัวแบ่งบรรทัดที่อ้างอิงถือเป็นส่วนหนึ่งของข้อมูล ไม่ใช่จุดสิ้นสุดของแถวปัจจุบัน
    -   `QuoteStyle.None`: ตัวแบ่งบรรทัดทั้งหมดถือเป็นจุดสิ้นสุดของแถวปัจจุบัน แม้ว่าตัวแบ่งบรรทัดจะเกิดขึ้นภายในค่าที่อ้างอิงก็ตาม ค่านี้เป็นค่าเริ่มต้นถ้าไม่ได้ระบุตัวเลือก `CsvStyle`
-   `CsvStyle`: ระบุวิธีจัดการข้อความอ้างอิง ไม่ควรใช้กับ `QuoteStyle.None`
    -   `CsvStyle.QuoteAfterDelimiter`: ข้อความอ้างอิงในเขตข้อมูลจะมีการตามด้วย`ตัวคั่น`
    -   `CsvStyle.QuoteAlways`: ข้อความอ้างอิงในเขตข้อมูลไม่ขึ้นอยู่กับตำแหน่งที่แสดง
-   `ตัวคั่น`: ตัวคั่นอักขระเดียว ควรใช้เฉพาะกับ `CsvStyle.QuoteAfterDelimiter` เท่านั้น
-   `IncludeLineSeparators`: ระบุว่าจะรวมอักขระตัวแบ่งบรรทัดในข้อความหรือไม่ ค่าเริ่มต้นคือ `false`
-   `การเข้ารหัส`: การเข้ารหัสข้อความของค่าไบนารี ค่าเริ่มต้นคือ `65001` (UTF-8)



## Category
Lines
