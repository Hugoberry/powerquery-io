---
title: Diagnostics.Trace
---

# Diagnostics.Trace


เขียนรายการการติดตาม หากเปิดใช้งานการติดตามไว้ และคืนค่า


## Syntax

```powerquery
Diagnostics.Trace(
    traceLevel as number,
    message as any,
    value as any,
    optional delayed as logical
) as any
```


## Remarks

เขียนการติดตาม `message` ถ้าเปิดใช้งานการติดตามไว้ และส่งกลับ `value` พารามิเตอร์ที่เลือกได้ `delayed` ระบุว่าจะหน่วงเวลาการประเมิน `value` จนกว่าจะมีการติดตามข้อความหรือไม่ `traceLevel` อาจใช้ค่าใดค่าหนึ่งต่อไปนี้:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
ติดตามข้อความก่อนที่จะเรียกฟังก์ชัน Text.From และคืนค่าผลลัพธ์
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
