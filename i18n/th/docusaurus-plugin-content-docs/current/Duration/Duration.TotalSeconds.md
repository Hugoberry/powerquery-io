---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

ส่งกลับวินาทีทั้งหมดที่ระยะเวลานี้ขยาย


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

ส่งกลับวินาทีทั้งหมดที่ขยายโดย <code>duration</code>


## Examples

### Example #1 
ค้นหาวินาทีทั้งหมดที่ขยายด้วยค่าระยะเวลา
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
