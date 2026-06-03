---
title: Table.AlternateRows
---

# Table.AlternateRows


รักษาออฟเซตเริ่มต้นแล้วเปลี่ยนแปลงโดยใช้และข้ามแถวดังต่อไปนี้


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

รักษาออฟเซตเริ่มต้นแล้วเปลี่ยนแปลงโดยใช้และข้ามแถวดังต่อไปนี้

-   `table`: ตารางค่าที่ป้อน
-   `offset`: จำนวนแถวที่จะรักษาไว้ก่อนเริ่มการคำนวณซ้ำ
-   `skip`: จำนวนแถวที่จะเอาออกในการคำนวณซ้ำแต่ละครั้ง
-   `take`: จำนวนแถวที่จะรักษาไว้ในการคำนวณซ้ำแต่ละครั้ง


## Examples

### Example #1
ส่งคืนตารางจากตารางซึ่งเริ่มต้นจากแถวแรก ข้ามค่า 1 และจากนั้น เก็บค่า 1
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
