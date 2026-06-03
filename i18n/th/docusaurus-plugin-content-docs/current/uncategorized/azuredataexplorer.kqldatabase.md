---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


นําเข้าข้อมูลจากคลัสเตอร์ Fabric Kusto ในโหมดการค้นพบ


## Syntax

```powerquery
AzureDataExplorer.KqlDatabase(
    optional cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

นําเข้าข้อมูลจากอินสแตนซ์ฐานข้อมูล KQL ของคุณ


## Examples

### Example #1
ส่งกลับตารางของข้อมูล Storm Events
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
ตารางที่มี Storm Event จากฐานข้อมูล "ตัวอย่าง" ในคลัสเตอร์ "วิธีใช้"
```



