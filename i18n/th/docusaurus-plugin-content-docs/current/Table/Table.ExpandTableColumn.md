---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

ขยายคอลัมน์ของระเบียนหรือคอลัมน์ของตารางไปยังหลายคอลัมน์ในตารางที่มี


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Details

ขยายตารางใน <code>table</code>[<code>column</code>] ไปยังหลายแถวและคอลัมน์ <code>columnNames</code> ใช้เพื่อเลือกคอลัมน์ที่จะขยายจากตารางภายใน ระบุ <code>newColumnNames</code> เพื่อหลีกเลี่ยงข้อขัดแย้งระหว่างคอลัมน์ที่มีอยู่และคอลัมน์ใหม่


## Examples

### Example #1 
ขยายคอลัมน์ตารางใน &lt;code&gt;[a]&lt;/code&gt; ในตาราง &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; ไปยัง 3 คอลัมน์ ได้แก่ &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; และ &lt;code&gt;[t.c]&lt;/code&gt;
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
