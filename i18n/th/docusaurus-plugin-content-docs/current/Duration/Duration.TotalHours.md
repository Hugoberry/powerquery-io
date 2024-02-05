---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

-ส่งกลับชั่วโมงทั้งหมดที่ระยะเวลานี้ขยาย


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

ส่งกลับชั่วโมงทั้งหมดที่ขยายโดย <code>duration</code>


## Examples

### Example #1 
ค้นหาชั่วโมงทั้งหมดที่ขยายด้วยค่าระยะเวลา
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
