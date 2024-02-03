---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

เขียนการติดตาม <code>message</code> หากเปิดใช้งานการติดตามไว้ และคืนค่า <code>value</code> พารามิเตอร์เสริม <code>delayed</code> จะกำหนดว่าจะหน่วงเวลาการประเมินค่า <code>value</code> จนกว่าจะมีการติดตามข้อความหรือไม่ <code>traceLevel</code> สามารถใช้หนึ่งในค่าต่อไปนี้ได้:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>  


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
