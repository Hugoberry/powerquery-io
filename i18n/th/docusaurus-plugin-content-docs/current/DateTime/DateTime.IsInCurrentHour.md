---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


ระบุว่า datetime นี้จะแสดงในช่วงระหว่างชั่วโมงปัจจุบัน ดังที่มีการกำหนดไว้โดยใช้วันที่และเวลาปัจจุบันจากระบบหรือไม่


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

ระบุว่า ค่า datetime ที่กำหนดไว้ <code>dateTime</code> จะแสดงในช่วงระหว่างชั่วโมงปัจจุบัน ดังที่มีการกำหนดไว้โดยใช้วันที่และเวลาปัจจุบันจากระบบหรือไม่      <ul>      <li><code>dateTime</code>: จะมีการประเมินผลค่า <code>datetime</code> หรือ <code>datetimezone</code></li>      </ul>


## Examples

### Example #1 
กำหนดว่าเวลาระบบปัจจุบันจะเป็นค่าชั่วโมงปัจจุบันหรือไม่
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
