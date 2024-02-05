---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

ส่งกลับ HTML สําหรับ URL ที่ระบุ ตามที่แสดงโดยเว็บเบราว์เซอร์


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

ส่งกลับ HTML สำหรับ <code>url</code> ที่ระบุ เมื่อดูโดยเว็บเบราว์เซอร์ อาจระบุพารามิเตอร์ระเบียนตัวเลือก <code>options</code> ไว้เพื่อระบุคุณสมบัติเพิ่มเติม ระเบียนสามารถประกอบด้วยเขตข้อมูลต่อไปนี้:     <ul>        <li><code>ApiKeyName</code>: หากไซต์เป้าหมายมีแนวคิดของคีย์ API พารามิเตอร์นี้สามารถใช้เพื่อระบุชื่อ (ไม่ใช่ค่า) ของพารามิเตอร์คีย์ที่ต้องใช้ใน URL ค่าคีย์จริงมีให้ในข้อมูลประจําตัว</li>        <li><code>WaitFor</code>: ระบุเงื่อนไขในการรอก่อนดาวน์โหลด HTML นอกจากการรอหน้าที่จะโหลด (ซึ่งเสร็จสิ้นเสมอ) สามารถเป็นระเบียนที่มีเขตข้อมูลการ Timeout และ/หรือ Selector ถ้ามีระบุ Timeout เท่านั้น ฟังก์ชันจะรอระยะเวลาที่ระบุก่อนดาวน์โหลด HTML ถ้ามีการระบุทั้ง Selector และ Timeout และ Timeout ผ่านไปก่อน Selector ที่อยู่ในหน้า ข้อผิดพลาดจะถูกโยนออก ถ้ามีการระบุ Selector ที่ไม่มี Timeout จะมีการใช้ค่าเริ่มต้น Timeout 30 วินาที</li>      </ul>    


## Examples

### Example #1 
ส่งกลับ HTML สำหรับ https://microsoft.com
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
ส่งกลับ HTML สำหรับ https://microsoft.com หลังจากรอให้ตัวเลือก CSS มีอยู่
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
ส่งกลับ HTML l สำหรับ https://microsoft.com หลังจากรอสิบวินาที
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
ส่งกลับ HTML สำหรับ https://microsoft.com หลังจากรอสิบวินาทีให้ตัวเลือก CSS มีอยู่
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
การเข้าถึงข้อมูล
