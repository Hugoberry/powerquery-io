---
title: Table.Schema
---

# Table.Schema


## Description

ส่งคืนตารางที่มีคำอธิบายของลูกค้า (เช่น schema) สำหรับตารางที่ระบุไว้


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

ส่งกลับตารางที่อธิบายถึงคอลัมน์ของ <code>table</code><br />แต่ละแถวในตารางจะอธิบายถึงคุณสมบัติคอลัมน์ของ <code>table</code>:<br /><table>  <tr>    <td><b>ชื่อคอลัมน์</b></td>    <td><b>คำอธิบาย</b></td>  </tr>  <tr>    <td><code>ชื่อ</code></td>    <td>ชื่อของคอลัมน์</td>  </tr>  <tr>    <td><code>ตำแหน่ง</code></td>    <td>ตำแหน่งที่ 0 ของคอลัมน์ใน <code>table</code></td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>ชื่อชนิดของคอลัมน์</td>  </tr>  <tr>    <td><code>ประเภท</code></td>    <td>ประเภทของชนิดคอลัมน์</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>ไม่ว่าคอลัมน์จะมีค่า <code>null</code> หรือไม่ก็ตาม</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>ฐานตัวเลข (ตัวอย่างเช่น ฐาน 2 หรือฐาน 10) ของเขตข้อมูล <code>NumericPrecision</code> และ <code>NumericScale</code></td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>ความแม่นยำของคอลัมน์ตัวเลขในฐานที่ระบุโดย <code>NumericPrecisionBase</code> นี่คือจำนวนตัวเลขสูงสุดที่สามารถแสดงได้โดยค่าของชนิดนี้ (รวมถึงตัวเลขเศษส่วน)</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>สเกลของคอลัมน์ตัวเลขในฐานที่ระบุโดย <code>NumericPrecisionBase</code> นี่คือจำนวนตัวเลขสูงสุดในส่วนค่าของเศษส่วนของชนิดนี้ ค่าของ <code>0</code> แสดงถึงสเกลแบบคงที่ที่ไม่มีตัวเลขเศษส่วน ค่าของ <code>null</code> แสดงถึงสเกลที่ไม่รู้จัก (อาจเพราะเป็นตัวเลขยกกำลังหรือไม่ได้กำหนดไว้)</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>จำนวนตัวเลขเศษส่วนที่สนับสนุนสูงสุดในส่วนที่สองของค่าวันที่หรือเวลา</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>จำนวนอักขระสูงสุดที่อนุญาตในคอลัมน์<code>ข้อความ</code> หรือจำนวนไบต์สูงสุดที่อนุญาตในคอลัมน์<code>ไบนารี</code></td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>ระบุว่าคอลัมน์นี้สามารถมีความยาวที่แตกต่างกันได้หรือไม่ (สูงสุด <code>MaxLength</code>) หรือเป็นขนาดแบบคงที่</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>ชื่อชนิดของคอลัมน์ในระบบชนิดของแหล่งข้อมูลแบบเนทีฟ (ตัวอย่างเช่น <code>nvarchar</code> สำหรับ SQL Server)</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>นิพจน์เริ่มต้นสำหรับค่าของคอลัมน์นี้ในภาษานิพจน์แบบเนทีฟของแหล่งข้อมูล (ตัวอย่างเช่น <code>42</code> หรือ <code>newid()</code> สำหรับ SQL Server)</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>คำอธิบาย</code></td>    <td>คำอธิบายของคอลัมน์</td>  </tr></table><br />



## Category
Table.Information
