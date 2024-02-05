---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

คืนค่าผลลัพธ์คำตอบแบบดิบจากจุดสิ้นสุด MailChimp API


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

ทำการเรียกใช้ไปยัง MailChimp API และคืนค่าคำตอบแบบดิบ


## Examples

### Example #1 
คืนค่าข้อมูลดิบจากจุดสิ้นสุด reports/click-details MailChimp API สำหรับแคมเปญที่ระบุ
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
ข้อมูลรายละเอียดการคลิกแบบดิบจากแคมเปญที่ระบุ
```



