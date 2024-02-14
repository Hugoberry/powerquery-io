---
title: Duration.Hours
---

# Duration.Hours


ส่งกลับส่วนชั่วโมงของระยะเวลา


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

ส่งกลับส่วนชั่วโมงของ <code>duration</code>


## Examples

### Example #1 
แยกชั่วโมงจากค่าระยะเวลา
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
