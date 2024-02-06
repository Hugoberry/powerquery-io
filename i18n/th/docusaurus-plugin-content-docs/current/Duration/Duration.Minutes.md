---
title: Duration.Minutes
---

# Duration.Minutes


ส่งกลับส่วนนาทีของระยะเวลา


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

ส่งกลับส่วนนาทีของ <code>duration</code>


## Examples

### Example #1 
แยกนาทีจากค่าระยะเวลา
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
