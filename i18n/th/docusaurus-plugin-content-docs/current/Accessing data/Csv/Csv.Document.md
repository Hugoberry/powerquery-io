---
title: Csv.Document
---

# Csv.Document


## Description

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


## Details

ส่งกลับเนื้อหาของเอกสาร CSV เป็นตาราง    <ul>      <li>        <code>columns</code> อาจเป็น null จำนวนคอลัมน์ รายชื่อของชื่อคอลัมน์ ชนิดตาราง หรือระเบียนตัวเลือก      </li>      <li>        <code>delimiter</code> อาจเป็นอักขระเดียว รายการของอักขระ หรือค่า  <code>""</code> ซึ่งระบุถึงแถวที่น่าจะแยกตามอักขระช่องว่างตามลำดับ ค่าเริ่มต้น: <code>","</code>       </li>      <li>        ให้อ้างอิง <code>ExtraValues.Type</code> สำหรับค่าที่สนับสนุนของ <code>extraValues</code>       </li>      <li>        <code>encoding</code> ระบุชนิดการเข้ารหัสข้อความ      </li>    </ul>    ถ้ามีการระบุระเบียนสำหรับ <code>columns</code> (และ <code>delimiter</code>, <code>extraValues</code> และ <code>encoding</code> เป็น null) อาจมีเขตข้อมูลระเบียนต่อไปนี้:    <ul>      <li>        <code>ตัวคั่น</code>: ตัวคั่นคอลัมน์ ค่าเริ่มต้น: <code>","</code>      </li>      <li>        <code>คอลัมน์</code>: อาจเป็น null จำนวนคอลัมน์ รายชื่อของคอลัมน์ หรือชนิดตาราง ถ้าจำนวนคอลัมน์ต่ำกว่าจำนวนที่พบในข้อมูลป้อนเข้า คอลัมน์เพิ่มเติมจะถูกละเว้น ถ้าจำนวนคอลัมน์สูงกว่าจำนวนที่พบในข้อมูลป้อนเข้า คอลัมน์เพิ่มเติมจะเป็น null เมื่อไม่ได้ระบุ จำนวนคอลัมน์จะถูกกำหนดโดยสิ่งที่พบในข้อมูลป้อนเข้า      </li>      <li>        <code>การเข้ารหัส</code>: การเข้ารหัสข้อความของไฟล์ ค่าเริ่มต้น: 65001 (UTF-8)      </li>      <li>        <code>CsvStyle</code>: ระบุวิธีการจัดการการอ้างอิง        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (ค่าเริ่มต้น): การอ้างอิงในเขตข้อมูลจะมีความสำคัญทันทีเมื่อตามหลังตัวคั่นเท่านั้น          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: การอ้างอิงในเขตข้อมูลมีความสำคัญทันทีเมื่อตามด้วยตัวคั่น          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: ระบุวิธีการจัดการตัวแบ่งบรรทัดที่อ้างอิง        <ul>          <li>            <code>QuoteStyle.Csv</code> (default): ตัวแบ่งบรรทัดที่ยกมาจะถือว่าเป็นส่วนหนึ่งของข้อมูล ไม่ใช่จุดสิ้นสุดของแถวปัจจุบัน          </li>          <li>            <code>QuoteStyle.None</code>: ตัวแบ่งบรรทัดทั้งหมดจะถือว่าเป็นจุดสิ้นสุดของแถวปัจจุบัน แม้ว่าจะเกิดขึ้นภายในค่าที่ยกมาก็ตาม          </li>        </ul>      </li>    </ul>  


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




## Category
Accessing data
