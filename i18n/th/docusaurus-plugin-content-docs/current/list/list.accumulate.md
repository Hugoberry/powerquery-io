---
title: List.Accumulate
---

# List.Accumulate


สะสมค่าสรุปจากข้อมูลในรายการ


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

สะสมค่าเฉลี่ยจากรายการในลิสต์ที่กำหนดโดยใช้ตัวสะสม

-   `list`: รายการที่จะทําซ้ำ
-   `seed`: ค่าสะสมเริ่มต้น
-   `accumulator`: ฟังก์ชันที่ใช้สถานะปัจจุบันและรายการปัจจุบัน และส่งกลับสถานะใหม่


## Examples

### Example #1
สะสมค่าสรุปจากข้อมูลในรายการ
```powerquery
let
    Source = List.Accumulate(
        {1, 2, 3, 4, 5},
        0,
        (runningSum, nextNumber) => runningSum + nextNumber
    )
in
    Source
```

Result: 
```powerquery
15
```


### Example #2
เชื่อมแต่ละคําในรายการด้วยช่องว่างระหว่างคํา แต่ไม่รวมช่องว่างที่จุดเริ่มต้น
```powerquery
let
    Source = List.Accumulate(
        {"The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."},
        null,
        (fullTextSoFar, nextPart) =>
            Text.Combine({fullTextSoFar, nextPart}, " ")
    )
in
    Source
```

Result: 
```powerquery
"The quick brown fox jumps over the lazy dog."
```


### Example #3
สร้างรายการเวลาเสร็จสมบูรณ์ของกระบวนการจากวันที่เริ่มต้นและรายการของเวลาเรียกใช้กระบวนการ
```powerquery
let
    #"Process Duration" =
    {
        #duration(0,1,0,0),
        #duration(0,2,0,0),
        #duration(0,3,0,0)
    },
    #"Start Time" = #datetime(2025, 9, 8, 19, 0, 0),
    #"Process Timeline" = List.Accumulate(
        #"Process Duration",
        {#"Start Time"},
        (accumulatedTimes, nextDuration) =>
            accumulatedTimes & {List.Last(accumulatedTimes) + nextDuration}
    )
in
    #"Process Timeline"
```

Result: 
```powerquery
{
    #datetime(2025, 9, 8, 19, 0, 0),
    #datetime(2025, 9, 8, 20, 0, 0),
    #datetime(2025, 9, 8, 22, 0, 0),
    #datetime(2025, 9, 9, 1, 0, 0)
}
```




## Category
List.Transformation functions
