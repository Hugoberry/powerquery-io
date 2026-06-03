---
title: AzureResourceGraph.Query
---

# AzureResourceGraph.Query



## Syntax

```powerquery
AzureResourceGraph.Query(
    query as text,
    optional scope as text,
    optional subscription as text,
    optional managementGroup as text,
    optional options as record
) as table
```


## Remarks

ดู https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli สำหรับตัวอย่างคิวรีเริ่มต้น


## Examples

### Example #1
ส่งกลับตารางที่มีผลลัพธ์คิวรีของคิวรีผู้ใช้ “ทรัพยากร”
```powerquery
AzureResourceGraph.Query("resources")
```



