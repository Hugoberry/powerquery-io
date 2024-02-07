---
title: Kusto.Contents
---

# Kusto.Contents


นำเข้าข้อมูลจาก Azure Data Explorer  (Kusto)


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

นำเข้าข้อมูลจากอินสแตนซ์ Azure Data Explorer (Kusto)


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



