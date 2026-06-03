---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


ระบุว่า datetime นี้จะแสดงในช่วงระหว่างวินาทีปัจจุบัน ดังที่มีการกำหนดไว้โดยใช้วันที่และเวลาปัจจุบันจากระบบหรือไม่


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

ระบุว่า ค่า datetime ที่กำหนดไว้ `dateTime` จะแสดงในช่วงระหว่างวินาทีปัจจุบัน ดังที่มีการกำหนดไว้โดยใช้วันที่และเวลาปัจจุบันจากระบบหรือไม่

-   `dateTime`: จะมีการประเมินผลค่า `datetime` หรือ `datetimezone`


## Examples

### Example #1
กำหนดว่าเวลาระบบปัจจุบันจะเป็นค่าวินาทีปัจจุบันหรือไม่
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
