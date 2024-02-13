---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


ส่งกลับนาทีทั้งหมดที่ระยะเวลานี้ขยาย


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

ส่งกลับนาทีทั้งหมดที่ขยายโดย <code>duration</code>


## Examples

### Example #1 
ค้นหานาทีทั้งหมดที่ขยายด้วยค่าระยะเวลา
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
