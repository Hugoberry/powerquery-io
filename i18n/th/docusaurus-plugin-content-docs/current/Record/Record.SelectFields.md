---
title: Record.SelectFields
---

# Record.SelectFields


## Description

ส่งกลับระเบียนที่มีเฉพาะเขตข้อมูลที่ระบุ


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

ส่งกลับระเบียนที่รวมเฉพาะเขตข้อมูลที่ระบุในรายการ <code>fields</code> จากค่าที่ป้อน <code>record</code>


## Examples

### Example #1 
เลือกฟิลด์ &#34;Item&#34; และ &#34;Price&#34; ในระเบียน
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
