---
title: Impala.Database
---

# Impala.Database


## Description

นำเข้าข้อมูลจากคลัสเตอร์ Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

นำเข้าข้อมูลจากคลัสเตอร์ Impala <code>server</code> หากไม่ระบุพอร์ต ระบบจะใช้พอร์ตเริ่มต้น 21050


## Examples

### Example #1 
แสดงตารางในคลัสเตอร์ Impala
```powerquery
Impala.Database("localhost:21050")
```



