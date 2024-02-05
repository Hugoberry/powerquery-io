---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

ประเมิน <code>query</code> กับ <code>target</code> โดยใช้พารามิเตอร์ที่ระบุใน <code>parameters</code> และตัวเลือกที่ระบุใน <code>options</code><br />ผลลัพธ์ของคิวรีถูกกําหนดโดย <code>target</code><br /><code>target</code> มีบริบทสําหรับการดําเนินการที่อธิบายโดย <code>query</code><br /><code>query</code> อธิบายคิวรีที่จะดําเนินการกับ <code>target</code><code>query</code> จะแสดงในลักษณะเฉพาะกับ <code>target</code> (ตัวอย่างเช่น คําสั่ง T-SQL)<br />ค่า <code>parameters</code> เพิ่มเติมอาจมีรายการหรือระเบียนตามความเหมาะสมในการใส่ค่าพารามิเตอร์ที่คาดหวังโดย <code>query</code><br /> ระเบียน <code>options</code> เพิ่มเติมอาจมีตัวเลือกที่มีผลต่อลักษณะการทํางานของการประเมินผลของ <code>query</code> กับ <code>target</code> ตัวเลือกเหล่านี้มีไว้สําหรับ <code>target</code><br />



## Category
Values
