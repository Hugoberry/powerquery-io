---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


ป้อน URL ของจุดสิ้นสุด Azure Enterprise REST API ที่เชื่อมโยงกับการลงทะเบียนของคุณ


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

คืนค่ารายการของรายงานและเดือนที่มีจาก Azure Enterprise API


## Examples

### Example #1 
ใช้ฟังก์ชัน AzureEnterprise.Tables และนำทางไปยังค่าเฉพาะเพื่อรับผลลัพธ์
```powerquery
อนุญาต
    ที่มา = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    สารบัญ = Source{[Key="Contents"]}[Data]
ใน
    สารบัญ
```

Result: 
```powerquery
ตาราง
```



