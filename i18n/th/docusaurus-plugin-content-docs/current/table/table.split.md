---
title: Table.Split
---

# Table.Split


แยกตารางที่ระบุเป็นรายการของตารางโดยใช้ขนาดหน้าที่ระบุ


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Remarks

แยก <code>table</code> ลงในรายการของตารางที่องค์ประกอบแรกของรายการเป็นตารางที่มีแถว <code>pageSize</code> แรกจาก    ตารางต้นทาง องค์ประกอบถัดไปของรายการคือตารางที่มีแถว <code>pageSize</code> ถัดไปจากตารางต้นทาง และอื่นๆ


## Examples

### Example #1 
แยกตารางของห้าระเบียนลงในตารางที่มีสองระเบียนสำหรับแต่ละรายการ
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
