---
title: Table.FromPartitions
---

# Table.FromPartitions


แสดงผลตารางที่เป็นผลลัพธ์ของการรวมชุดตารางที่มีการแบ่งพาร์ติชัน


## Syntax

```powerquery
Table.FromPartitions(
    partitionColumn as text,
    partitions as list,
    optional partitionColumnType as type
) as table
```


## Remarks

ส่งกลับตารางที่เป็นผลลัพธ์ของการรวมชุดตารางที่มีการแบ่งพาร์ติชัน `partitions` `partitionColumn` เป็นชื่อของคอลัมน์ที่เพิ่ม ประเภทของคอลัมน์เริ่มต้นคือ `any` แต่สามารถระบุได้ด้วย `partitionColumnType`


## Examples

### Example #1
ค้นหาประเภทรายการจากรายการ `{number}`
```powerquery
Table.FromPartitions(
    "Year",
    {
        {
            1994,
            Table.FromPartitions(
                "Month",
                {
                    {
                        "Jan",
                        Table.FromPartitions(
                            "Day",
                            {
                                {1, #table({"Foo"}, {{"Bar"}})},
                                {2, #table({"Foo"}, {{"Bar"}})}
                            }
                        )
                    },
                    {
                        "Feb",
                        Table.FromPartitions(
                            "Day",
                            {
                                {3, #table({"Foo"}, {{"Bar"}})},
                                {4, #table({"Foo"}, {{"Bar"}})}
                            }
                        )
                    }
                }
            )
        }
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        Foo = "Bar",
        Day = 1,
        Month = "Jan",
        Year = 1994
    ],
    [
        Foo = "Bar",
        Day = 2,
        Month = "Jan",
        Year = 1994
    ],
    [
        Foo = "Bar",
        Day = 3,
        Month = "Feb",
        Year = 1994
    ],
    [
        Foo = "Bar",
        Day = 4,
        Month = "Feb",
        Year = 1994
    ]
})
```




## Category
Table.Row operations
