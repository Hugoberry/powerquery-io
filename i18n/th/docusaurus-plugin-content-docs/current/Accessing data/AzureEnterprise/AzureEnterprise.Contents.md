---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

ป้อน URL ของจุดสิ้นสุด Azure Enterprise REST API ที่เชื่อมโยงกับการลงทะเบียนของคุณ


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

คืนค่าผลลัพธ์ไบนารีของการโทรไปยัง url ที่ระบุสำหรับ Azure Enterprise API


## Examples

### Example #1 
ใช้ฟังก์ชัน AzureEnterprise.Contents ในการคืนค่าผลลัพธ์ของรายงานที่ระบุ
```powerquery
        อนุญาต
            ของรายงาน = Table.FromColumns({Lines.FromBinary(Binary.Buffer(AzureEnterprise.Contents("https://ea.azure.com/rest/12345/usage-report", [month="2014-04", type="summary", fmt="Csv"])),null,null,1252)}),
            การข้ามแบบ = Table.Skip(report, 2),
            สปลิต =  Table.SplitColumn(skips, "Column1", Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)),
            เลื่อนตำแหน่ง = Table.PromoteHeaders(split)
        ใน
            เลื่อนตำแหน่ง
```

Result: 
```powerquery
ตาราง
```



