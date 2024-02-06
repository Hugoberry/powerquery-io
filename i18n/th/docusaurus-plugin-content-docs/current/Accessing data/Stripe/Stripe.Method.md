---
title: Stripe.Method
---

# Stripe.Method


เรียกใช้ Stripe API


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

เรียกใช้ Stripe API ที่ https://api.stripe.com/v1/<code>method</code> พร้อมส่งผ่านระเบียน <code>additionalParameters</code> เป็นเช่นพารามิเตอร์เพิ่มเติม และรายการ <code>ColumnNames</code> สำหรับชื่อคอลัมน์ที่คาดไว้ มีการใช้ Stripe เวอร์ชัน 2015-10-16


## Examples

### Example #1 
ส่งคืนค่าตารางพร้อมเหตุการณ์ที่สร้างขึ้นหลังวันที่ 1 เดือนพฤศจิกายน ปี 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
ตารางพร้อมเหตุการณ์ที่ระบุเฉพาะสำหรับบัญชี Stripe ปัจจุบัน
```


### Example #2 
ส่งคืนค่าตารางพร้อม SKU ทั้งหมด
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
ตารางพร้อม SKU ทั้งหมดสำหรับบัญชี Stripe ปัจจุบัน
```



