---
title: Marketo.Leads
---

# Marketo.Leads


## Description

ส่งคืนค่าตารางพร้อมรายละเอียดลูกค้าที่สนใจ


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

เรียกใช้ Marketo REST API Endpoint ที่ <code>url</code>/rest/v1/leads.json ส่งคืนข้อมูลลูกค้าที่สนใจทั้งหมดอยู่ในรายการ <code>leadIds</code>


## Examples

### Example #1 
ดึงรายละเอียดลูกค้าที่สนใจสามราย
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
ตารางพร้อมรายละเอียดสำหรับลูกค้าที่สนใจ
```



