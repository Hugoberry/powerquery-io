---
title: List.Alternate
---

# List.Alternate


ส่งกลับรายการที่ประกอบด้วยองค์ประกอบออฟเซตจำนวนคี่ในรายการ


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Remarks

ส่งกลับรายการที่ประกอบด้วยองค์ประกอบออฟเซตจำนวนคี่ในรายการ สลับระหว่างการใช้และการข้ามค่าจากรายการ <code>list</code> โดยขึ้นอยู่กับพารามิเตอร์    <ul>    <li><code>count</code>: ระบุจำนวนค่าที่ถูกข้ามในแต่ละครั้ง</li>    <li><code>repeatInterval</code>: ช่วงการทำซ้ำที่มีให้เลือกจะระบุจำนวนค่าที่ถูกเพิ่มระหว่างค่าที่ข้าม</li>    <li><code>offset</code>: พารามิเตอร์ออฟเซตที่เลือกได้ที่จะเริ่มข้ามค่าในออฟเซตเริ่มต้น</li>    </ul>


## Examples

### Example #1 
สร้างรายการจาก \{1..10} ที่ข้ามตัวเลขแรก
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
สร้างรายการจาก \{1..10} ที่ข้ามตัวเลขอื่นทุกตัว
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
สร้างรายการจาก \{1..10} ที่เริ่มต้นจาก 1 และข้ามตัวเลขอื่นทุกตัว
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
สร้างรายการจาก \{1..10} ที่เริ่มต้นจาก 1 ข้ามหนึ่งค่า เก็บสองค่าและอื่นๆ
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
