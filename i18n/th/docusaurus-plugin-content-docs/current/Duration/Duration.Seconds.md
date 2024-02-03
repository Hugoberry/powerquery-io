---
title: Duration.Seconds
---

# Duration.Seconds


## Description

ส่งกลับส่วนวินาทีของระยะเวลา


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

ส่งกลับส่วนวินาทีของ <code>duration</code>


## Examples

### Example #1 
แยกวินาทีจากค่าระยะเวลา
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
