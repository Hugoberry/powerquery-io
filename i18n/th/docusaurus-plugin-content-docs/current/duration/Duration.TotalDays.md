---
title: Duration.TotalDays
---

# Duration.TotalDays


ส่งกลับวันทั้งหมดที่ระยะเวลานี้ขยาย


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

ส่งกลับจํานวนวันทั้งหมดที่ขยายโดย <code>duration</code>


## Examples

### Example #1 
ค้นหาจํานวนวันทั้งหมดที่ขยายด้วยค่าระยะเวลา
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
