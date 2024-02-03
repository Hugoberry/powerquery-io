---
title: WebAction.Request
---

# WebAction.Request


## Description

สร้างการดำเนินการที่เมื่อเรียกใช้งาน จะคืนค่าผลลัพธ์ของการดำเนินการตามคำขอ HTTP เป็นค่าไบนารี


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

สร้างการดําเนินการที่เมื่อเรียกใช้จะส่งกลับผลลัพธ์ของการดําเนินการคําขอ <code>method</code> กับ <code>url</code>โดยใช้ HTTP เป็นค่าไบนารี    พารามิเตอร์ระเบียนเพิ่มเติม <code>options</code> อาจมีให้เพื่อระบุคุณสมบัติเพิ่มเติม ระเบียนสามารถมีเขตข้อมูลต่อไปนี้:    <ul><li><code>Query</code> : เพิ่มพารามิเตอร์คิวรีด้วยโปรแกรมลงใน URL โดยไม่ต้องกังวลเกี่ยวกับอักขระหลีก</li><li><code>ApiKeyName</code> : ถ้าไซต์เป้าหมายมีการระบุคีย์ API ไว้ จะสามารถใช้พารามิเตอร์นี้เพื่อระบุชื่อ (ไม่ใช่ค่า) ของพารามิเตอร์คีย์ที่จะต้องใช้ใน URL จะมีการแสดงค่าคีย์จริงไว้ในข้อมูลประจำตัว</li><li><code>Headers</code> : การระบุค่านี้เป็นระเบียนจะใส่ส่วนหัวเพิ่มเติมให้กับคำขอ HTTP</li><li><code>Timeout</code> : การระบุค่านี้เป็นระยะเวลาจะเปลี่ยนแปลงการหมดเวลาสำหรับคำขอ HTTP ค่าเริ่มต้นคือ 100 วินาที</li><li><code>ExcludedFromCacheKey</code> : การระบุค่านี้เป็นรายการจะแยกคีย์ส่วนหัว HTTP เหล่านี้ออกจากการเป็นส่วนหนึ่งของการคำนวณสำหรับการแคชข้อมูล</li><li><code>IsRetry</code> : การระบุค่าตรรกะนี้เป็นจริงจะละเว้นการตอบสนองที่มีอยู่ในแคชเมื่อดึงข้อมูล</li><li><code>ManualStatusHandling</code> : การระบุค่านี้เป็นรายการจะป้องกันไม่ให้มีการจัดการในตัวสำหรับคำขอ HTTP ที่การตอบสนองมีหนึ่งในรหัสสถานะเหล่านี้</li><li><code>RelativePath</code> : การระบุค่านี้เป็นข้อความจะผนวกเข้ากับ URL ฐานก่อนทำการร้องขอ</li><li><code>Content</code> : การระบุค่านี้จะทำให้เนื้อหากลายเป็นเนื้อความของคำขอ HTTP</li></ul>    <br />    โปรดทราบว่าฟังก์ชันนี้ถูกปิดใช้งานในบริบทส่วนใหญ่ ให้พิจารณาใช้ Web.Contents หรือ Web.Headers แทน    


## Examples

### Example #1 
ดําเนินการคำขอ GET กับ Bing
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action