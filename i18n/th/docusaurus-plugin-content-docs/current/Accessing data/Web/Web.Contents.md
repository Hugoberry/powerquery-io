---
title: Web.Contents
---

# Web.Contents


ส่งกลับเนื้อหาที่ดาวน์โหลดจาก URL เป็นไบนารี


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

ส่งกลับเนื้อหาที่ดาวน์โหลดจาก <code>url</code> เป็นไบนารี พารามิเตอร์ระเบียนเพิ่มเติม <code>options</code> อาจมีให้เพื่อระบุคุณสมบัติเพิ่มเติม ระเบียนสามารถมีเขตข้อมูลต่อไปนี้:    <ul><li><code>Query</code> : เพิ่มพารามิเตอร์คิวรีด้วยโปรแกรมลงใน URL โดยไม่ต้องกังวลเกี่ยวกับอักขระหลีก</li><li><code>ApiKeyName</code> : ถ้าไซต์เป้าหมายมีการระบุคีย์ API ไว้ จะสามารถใช้พารามิเตอร์นี้เพื่อระบุชื่อ (ไม่ใช่ค่า) ของพารามิเตอร์คีย์ที่จะต้องใช้ใน URL จะมีการแสดงค่าคีย์จริงไว้ในข้อมูลประจำตัว</li><li><code>Headers</code> : การระบุค่านี้เป็นระเบียนจะใส่ส่วนหัวเพิ่มเติมให้กับคำขอ HTTP</li><li><code>Timeout</code> : การระบุค่านี้เป็นระยะเวลาจะเปลี่ยนแปลงการหมดเวลาสำหรับคำขอ HTTP ค่าเริ่มต้นคือ 100 วินาที</li><li><code>ExcludedFromCacheKey</code> : การระบุค่านี้เป็นรายการจะแยกคีย์ส่วนหัว HTTP เหล่านี้ออกจากการเป็นส่วนหนึ่งของการคำนวณสำหรับการแคชข้อมูล</li><li><code>IsRetry</code> : การระบุค่าตรรกะนี้เป็นจริงจะละเว้นการตอบสนองที่มีอยู่ในแคชเมื่อดึงข้อมูล</li><li><code>ManualStatusHandling</code> : การระบุค่านี้เป็นรายการจะป้องกันไม่ให้มีการจัดการในตัวสำหรับคำขอ HTTP ที่การตอบสนองมีหนึ่งในรหัสสถานะเหล่านี้</li><li><code>RelativePath</code> : การระบุค่านี้เป็นข้อความจะผนวกเข้ากับ URL ฐานก่อนทำการร้องขอ</li><li><code>Content</code> : การระบุค่านี้จะเปลี่ยนแปลงคำขอของเว็บจาก GET เป็น POST โดยใช้ค่าของตัวเลือกเป็นเนื้อหาของ POST</li></ul>    มีการร้องขอทาง HTTP เป็น GET (เมื่อไม่มีการระบุเนื้อหา) หรือ POST (เมื่อมีเนื้อหา) คําขอ POST สามารถทำได้แบบไม่ระบุชื่อเท่านั้น    <br />    ส่วนหัวของการตอบสนอง HTTP จะพร้อมใช้งานเป็นเมตาดาต้าในผลลัพธ์ไบนารี ภายนอกบริบทตัวเชื่อมต่อข้อมูลแบบกําหนดเอง มีเพียงชุดย่อยของส่วนหัวการตอบสนองเท่านั้นที่พร้อมใช้งาน (สำหรับเหตุผลด้านความปลอดภัย)    


## Examples

### Example #1 
เรียกใช้เนื้อหาของ &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; โดยใช้ตัวเลือก RelativePath และ Query ตัวเลือกเหล่านี้สามารถใช้เพื่อคิวรี URL ฐานสแตติกแบบไดนามิกได้
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2 
ดําเนินการโพสต์กับ URL ผ่านส่วนข้อมูล JSON ไบนารีและแยกวิเคราะห์การตอบสนองเป็น JSON
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3 
เชื่อมต่อกับ URL ที่ปลอดภัยที่ยอมรับคีย์การรับรองความถูกต้องเป็นส่วนหนึ่งของสตริงคิวรี แทนที่การเขียนโค้ดคีย์ลับใน M (ซึ่งอาจทําให้เกิดความเสี่ยงด้านความปลอดภัย)     คีย์สามารถให้ไว้อย่างปลอดภัยโดยการระบุชื่อ (ไม่ใช่ค่า) ใน M เลือกการรับรองความถูกต้องของ API เว็บ และการใส่ค่าคีย์เป็นส่วนหนึ่งของข้อมูลประจําตัว API เว็บ    เมื่อใช้ด้วยวิธีนี้ ตัวอย่างต่อไปนี้จะสร้างคําขอไปยัง &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
