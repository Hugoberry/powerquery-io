---
title: Csv.Document
---

# Csv.Document


ส่งกลับเนื้อหาของเอกสาร CSV เป็นตาราง


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

ส่งกลับเนื้อหาของเอกสาร CSV เป็นตาราง

-   `columns` สามารถเป็น null จำนวนคอลัมน์ รายชื่อของชื่อคอลัมน์ ชนิดตาราง หรือระเบียนตัวเลือก
-   `delimiter` สามารถเป็นอักขระเดียว รายการอักขระ หรือค่า `""` ซึ่งระบุว่าแถวควรถูกแยกด้วยอักขระช่องว่างที่ต่อเนื่องกัน ค่าเริ่มต้น: `","`
-   อ้างอิงถึง `ExtraValues.Type` สำหรับค่าที่สนับสนุนของ `extraValues`
-   `encoding` ระบุชนิดการเข้ารหัสข้อความ

หากมีการระบุระเบียนสำหรับ `columns` (และ `delimiter`, `extraValues` และ `encoding` เป็น null) อาจมีการระบุเขตข้อมูลระเบียนต่อไปนี้:

-   `ตัวคั่น`: ตัวคั่นคอลัมน์อักขระเดียว ค่าเริ่มต้น: `","`
-   `คอลัมน์`: สามารถเป็น null จำนวนคอลัมน์ รายชื่อของชื่อคอลัมน์ หรือชนิดตารางได้ หากจำนวนคอลัมน์ต่ำกว่าจำนวนที่พบในอินพุต คอลัมน์เพิ่มเติมจะถูกละเว้น หากจำนวนคอลัมน์สูงกว่าจำนวนที่พบในอินพุต คอลัมน์เพิ่มเติมจะเป็น null เมื่อไม่ได้ระบุ จำนวนคอลัมน์จะถูกกำหนดโดยสิ่งที่พบในอินพุต
-   `การเข้ารหัส`: การเข้ารหัสข้อความของไฟล์ ค่าเริ่มต้น: 65001 (UTF-8)
-   `CsvStyle`: ระบุวิธีจัดการข้อความอ้างอิง
    -   `CsvStyle.QuoteAfterDelimiter` (ค่าเริ่มต้น): ข้อความอ้างอิงในเขตข้อมูลจะมีการตามด้วยตัวคั่น
    -   `CsvStyle.QuoteAlways`: ข้อความอ้างอิงในเขตข้อมูลไม่ขึ้นอยู่กับตำแหน่งที่แสดง
-   `QuoteStyle`: ระบุวิธีจัดการตัวแบ่งบรรทัดที่อ้างอิง
    -   `QuoteStyle.Csv` (default): ตัวแบ่งบรรทัดที่อ้างอิงถือเป็นส่วนหนึ่งของข้อมูล ไม่ใช่จุดสิ้นสุดของแถวปัจจุบัน
    -   `QuoteStyle.None`: ตัวแบ่งบรรทัดทั้งหมดถือเป็นจุดสิ้นสุดของแถวปัจจุบัน แม้ว่าตัวแบ่งบรรทัดจะเกิดขึ้นภายในค่าที่อ้างอิงก็ตาม
-   `IncludeByteOrderMark`: ค่าตรรกะที่ระบุว่าจะรวมเครื่องหมายลำดับไบต์ (BOM) ที่จุดเริ่มต้นของผลลัพธ์ CSV หรือไม่ เมื่อตั้งค่าเป็น true ระบบจะเขียนฟังก์ชัน BOM (ตัวอย่างเช่น UTF-8 BOM: `0xEF 0xBB 0xBF`); เมื่อตั้งค่าเป็น false จะไม่มีการรวม BOM ตัวเลือกนี้สามารถใช้ได้เฉพาะในสถานการณ์ผลลัพธ์เท่านั้น ค่าเริ่มต้นคือ `false`
-   `ExtraValues`: อ้างอิงถึง `ExtraValues.Type` สำหรับค่าที่สนับสนุนของ ExtraValues


## Examples

### Example #1
ประมวลผลข้อความ CSV พร้อมหัวคอลัมน์
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
