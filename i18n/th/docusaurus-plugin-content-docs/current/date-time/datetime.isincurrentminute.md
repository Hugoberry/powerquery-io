---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


ระบุว่า datetime นี้จะแสดงในช่วงระหว่างนาทีปัจจุบัน ดังที่มีการกำหนดไว้โดยใช้วันที่และเวลาปัจจุบันจากระบบหรือไม่


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

ระบุว่า ค่า datetime ที่กำหนดไว้ `dateTime` จะแสดงในช่วงระหว่างนาทีปัจจุบัน ดังที่มีการกำหนดไว้โดยใช้วันที่และเวลาปัจจุบันจากระบบหรือไม่

-   `dateTime`: จะมีการประเมินผลค่า `datetime` หรือ `datetimezone`


## Examples

### Example #1
กำหนดว่าเวลาระบบปัจจุบันจะเป็นค่านาทีปัจจุบันหรือไม่
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
