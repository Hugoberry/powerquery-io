---
title: WorkplaceAnalytics.Data
---

# WorkplaceAnalytics.Data



## Syntax

```powerquery
WorkplaceAnalytics.Data(
    scopeId as text,
    optional jobName as text,
    optional jobId as text,
    optional schemaType as text
) as table
```


## Remarks

นำเข้าเมตริกรายสัปดาห์และข้อมูลแอตทริบิวต์จาก Workplace Analytics


## Examples

### Example #1 
ส่งคืนตารางที่มีแอตทริบิวต์ที่มองเห็นได้ และเมตริกต่อสัปดาห์สำหรับพนักงานที่มีการวัดผลแต่ละคนในพาร์ติชัน
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```



