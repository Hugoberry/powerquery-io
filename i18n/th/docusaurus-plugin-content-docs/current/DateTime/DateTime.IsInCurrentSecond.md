---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

ระบุว่า datetime นี้จะแสดงในช่วงระหว่างวินาทีปัจจุบัน ดังที่มีการกำหนดไว้โดยใช้วันที่และเวลาปัจจุบันจากระบบหรือไม่


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

ระบุว่า ค่า datetime ที่กำหนดไว้ <code>dateTime</code> จะแสดงในช่วงระหว่างวินาทีปัจจุบัน ดังที่มีการกำหนดไว้โดยใช้วันที่และเวลาปัจจุบันจากระบบหรือไม่      <ul>      <li><code>dateTime</code>: จะมีการประเมินผลค่า <code>datetime</code> หรือ <code>datetimezone</code></li>      </ul>


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
