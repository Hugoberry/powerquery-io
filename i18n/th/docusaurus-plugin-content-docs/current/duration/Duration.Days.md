---
title: Duration.Days
---

# Duration.Days


ส่งกลับส่วนวันของระยะเวลา


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

ส่งกลับส่วนวันของ <code>duration</code>


## Examples

### Example #1 
แยกจํานวนวันระหว่างวันที่สองวัน
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
