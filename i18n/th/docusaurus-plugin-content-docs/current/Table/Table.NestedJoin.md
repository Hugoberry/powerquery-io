---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

ดำเนินการรวมระหว่างตารางบนคอลัมน์ที่ให้และสร้างผลลัพธ์การรวมในคอลัมน์ใหม่


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Details

รวมแถวของ <code>table1</code> กับแถวของ <code>table2</code> ที่มีค่าคอลัมน์หลักเท่ากันซึ่งเลือกโดย <code>key1</code> (สำหรับ <code>table1</code>) และ <code>key2</code> (สำหรับ <code>table2</code>) ผลลัพธ์จะถูกใส่ลงในคอลัมน์ที่ชื่อ <code>newColumnName</code><br /><code>joinKind</code> ที่เลือกได้จะระบุชนิดของการรวมที่จะใช้งาน ตามค่าเริ่มต้น การรวมภายนอกด้านซ้ายจะดำเนินการหากไม่มีการระบุ <code>joinKind</code><br />สามารถรวมชุดที่เลือกได้ของ <code>keyEqualityComparers</code> เพื่อระบุวิธีการเปรียบเทียบคอลัมน์หลัก ขณะนี้ฟีเจอร์นี้มีไว้ใช้งานสำหรับการใช้งานภายในเท่านั้น<br />  


## Examples

### Example #1 
รวมสองตารางโดยใช้คอลัมน์หลักคอลัมน์เดียว
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
