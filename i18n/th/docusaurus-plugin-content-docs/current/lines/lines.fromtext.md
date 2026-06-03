---
title: Lines.FromText
---

# Lines.FromText


แปลงค่าข้อความเป็นรายการค่าข้อความที่แบ่งด้วยตัวแบ่งบรรทัด หาก includeLineSeparators เป็นจริง จะมีการรวมอักขระตัวแบ่งบรรทัดในข้อความ


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

แปลงค่าข้อความเป็นรายการของค่าข้อความที่แยกที่ตัวแบ่งบรรทัด

-   `text`: ค่าข้อความที่จะแปลงเป็นรายการของค่าข้อความ
-   `quoteStyle`: ระบุวิธีการจัดการตัวแบ่งบรรทัด ค่าของ `quoteStyle` สามารถเป็น `null` ค่าเริ่มต้นคือ `QuoteStyle.None`
-   `includeLineSeparators`: ระบุว่าจะรวมอักขระตัวแบ่งบรรทัดในข้อความหรือไม่ ค่าของ `includeLineSeparators` สามารถเป็น `null` ค่าเริ่มต้นคือ `false`

ถ้ามีการระบุระเบียนสําหรับ `quoteStyle` (และ `includeLineSeparators` คือ `null`) จะสามารถระบุเขตข้อมูลระเบียนต่อไปนี้ได้:

-   `QuoteStyle`: ระบุวิธีจัดการตัวแบ่งบรรทัดที่อ้างอิง
    -   `QuoteStyle.Csv`: ตัวแบ่งบรรทัดที่อ้างอิงถือเป็นส่วนหนึ่งของข้อมูล ไม่ใช่จุดสิ้นสุดของแถวปัจจุบัน
    -   `QuoteStyle.None`: ตัวแบ่งบรรทัดทั้งหมดถือเป็นจุดสิ้นสุดของแถวปัจจุบัน แม้ว่าตัวแบ่งบรรทัดจะเกิดขึ้นภายในค่าที่อ้างอิงก็ตาม ค่านี้เป็นค่าเริ่มต้นถ้าไม่ได้ระบุตัวเลือก `CsvStyle`
-   `CsvStyle`: ระบุวิธีจัดการข้อความอ้างอิง ไม่ควรใช้กับ `QuoteStyle.None`
    -   `CsvStyle.QuoteAfterDelimiter`: ข้อความอ้างอิงในเขตข้อมูลจะมีการตามด้วย`ตัวคั่น`
    -   `CsvStyle.QuoteAlways`: ข้อความอ้างอิงในเขตข้อมูลไม่ขึ้นอยู่กับตำแหน่งที่แสดง
-   `ตัวคั่น`: ตัวคั่นอักขระเดียว ควรใช้เฉพาะกับ `CsvStyle.QuoteAfterDelimiter` เท่านั้น
-   `IncludeLineSeparators`: ระบุว่าจะรวมอักขระตัวแบ่งบรรทัดในข้อความหรือไม่ ค่าเริ่มต้นคือ `false`



## Category
Lines
