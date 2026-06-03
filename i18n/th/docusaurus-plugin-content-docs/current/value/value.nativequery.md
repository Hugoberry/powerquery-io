---
title: Value.NativeQuery
---

# Value.NativeQuery


ประเมินคิวรีเทียบกับเป้าหมาย


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

ประเมิน `query` กับ `target` โดยใช้พารามิเตอร์ที่ระบุใน `parameters` และตัวเลือกที่ระบุใน `options`

ผลลัพธ์ของคิวรีถูกกําหนดโดย `target`

`target` มีบริบทสําหรับการดําเนินการที่อธิบายโดย `query`

`query` อธิบายคิวรีที่จะดําเนินการกับ `target``query` จะแสดงในลักษณะเฉพาะกับ `target` (ตัวอย่างเช่น คําสั่ง T-SQL)

ค่า `parameters` เพิ่มเติมอาจมีรายการหรือระเบียนตามความเหมาะสมในการใส่ค่าพารามิเตอร์ที่คาดหวังโดย `query`

ระเบียน `options` เพิ่มเติมอาจมีตัวเลือกที่มีผลต่อลักษณะการทํางานของการประเมินผลของ `query` กับ `target` ตัวเลือกเหล่านี้มีไว้สําหรับ `target`



## Category
Values
