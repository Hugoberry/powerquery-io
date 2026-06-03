---
title: Web.BrowserContents
---

# Web.BrowserContents


ส่งกลับ HTML สําหรับ URL ที่ระบุ ตามที่แสดงโดยเว็บเบราว์เซอร์


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

ส่งกลับ HTML สำหรับ `url` ที่ระบุ ตามที่แสดงโดยเว็บเบราว์เซอร์ อาจมีการระบุพารามิเตอร์ระเบียนเพิ่มเติม `options` เพื่อระบุคุณสมบัติเพิ่มเติม ระเบียนสามารถมีเขตข้อมูลต่อไปนี้:

-   `ApiKeyName`: ถ้าไซต์เป้าหมายมีเครื่องหมายของคีย์ API คุณสามารถใช้พารามิเตอร์นี้เพื่อระบุชื่อ (ไม่ใช่ค่า) ของพารามิเตอร์ของคีย์ที่ต้องใช้ใน URL ได้ มีการระบุค่าคีย์จริงในข้อมูลประจำตัว
-   `WaitFor`: ระบุเงื่อนไขที่จะรอก่อนดาวน์โหลด HTML นอกเหนือจากการรอให้หน้าโหลด (ซึ่งทำได้เสมอ) สามารถเป็นระเบียนที่มีเขตข้อมูลการหมดเวลาและ/หรือตัวเลือก ถ้ามีการระบุการหมดเวลาเท่านั้น ฟังก์ชันจะรอตามระยะเวลาที่ระบุก่อนดาวน์โหลด HTML ถ้ามีการระบุทั้งตัวเลือกและการหมดเวลา และการหมดเวลาจะผ่านไปก่อนที่ตัวเลือกจะปรากฏบนหน้า ข้อผิดพลาดจะเกิดขึ้น ถ้ามีการระบุตัวเลือกโดยไม่มีการหมดเวลา ระบบจะใช้การหมดเวลาตามค่าเริ่มต้นที่ 30 วินาที


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
Accessing data
