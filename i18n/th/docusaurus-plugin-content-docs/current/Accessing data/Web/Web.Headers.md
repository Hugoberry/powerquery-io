---
title: Web.Headers
---

# Web.Headers


## Description

ส่งกลับส่วนหัว HTTP ที่ดาวน์โหลดจาก URL เป็นค่าเรกคอร์ด


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

ส่งกลับส่วนหัวที่ดาวน์โหลดจาก <code>url</code> เป็นระเบียน พารามิเตอร์ระเบียนเพิ่มเติม <code>options</code> อาจมีให้เพื่อระบุคุณสมบัติเพิ่มเติม ระเบียนสามารถมีเขตข้อมูลต่อไปนี้:    <ul><li><code>Query</code> : เพิ่มพารามิเตอร์คิวรีด้วยโปรแกรมลงใน URL โดยไม่ต้องกังวลเกี่ยวกับอักขระหลีก</li><li><code>ApiKeyName</code> : ถ้าไซต์เป้าหมายมีการระบุคีย์ API ไว้ จะสามารถใช้พารามิเตอร์นี้เพื่อระบุชื่อ (ไม่ใช่ค่า) ของพารามิเตอร์คีย์ที่จะต้องใช้ใน URL จะมีการแสดงค่าคีย์จริงไว้ในข้อมูลประจำตัว</li><li><code>Headers</code> : การระบุค่านี้เป็นระเบียนจะใส่ส่วนหัวเพิ่มเติมให้กับคำขอ HTTP</li><li><code>Timeout</code> : การระบุค่านี้เป็นระยะเวลาจะเปลี่ยนแปลงการหมดเวลาสำหรับคำขอ HTTP ค่าเริ่มต้นคือ 100 วินาที</li><li><code>ExcludedFromCacheKey</code> : การระบุค่านี้เป็นรายการจะแยกคีย์ส่วนหัว HTTP เหล่านี้ออกจากการเป็นส่วนหนึ่งของการคำนวณสำหรับการแคชข้อมูล</li><li><code>IsRetry</code> : การระบุค่าตรรกะนี้เป็นจริงจะละเว้นการตอบสนองที่มีอยู่ในแคชเมื่อดึงข้อมูล</li><li><code>ManualStatusHandling</code> : การระบุค่านี้เป็นรายการจะป้องกันไม่ให้มีการจัดการในตัวสำหรับคำขอ HTTP ที่การตอบสนองมีหนึ่งในรหัสสถานะเหล่านี้</li><li><code>RelativePath</code> : การระบุค่านี้เป็นข้อความจะผนวกเข้ากับ URL ฐานก่อนทำการร้องขอ</li></ul>    มีการร้องขอทาง HTTP ด้วยเมธอด HEAD ภายนอกบริบทตัวเชื่อมต่อข้อมูลแบบกําหนดเอง มีเพียงชุดย่อยของส่วนหัวการตอบสนองเท่านั้นที่พร้อมใช้งาน (สำหรับเหตุผลด้านความปลอดภัย)    


## Examples

### Example #1 
เรียกใช้ส่วนหัว HTTP สําหรับ &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; ที่ใช้ตัวเลือก RelativePath และ Query
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
