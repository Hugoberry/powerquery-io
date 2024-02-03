---
title: Table.FromPartitions
---

# Table.FromPartitions


## Description

Mengembalikan jadual yang merupakan hasil daripada menggabungkan satu set jadual pemetakan.


## Syntax

```powerquery
Table.FromPartitions(
    partitionColumn as text,
    partitions as list,
    optional partitionColumnType as type
) as table
```


## Details

Kembalikan jadual yang merupakan hasil pengabungan set jadual yang dipetakkan, <code>partitions</code>. <code>partitionColumn</code> ialah nama lajur yang ditambah. Jenis lajur lalai untuk <code>any</code>, tetapi boleh ditentukan oleh <code>partitionColumnType</code>.


## Examples

### Example #1 
Cari jenis item daripada senarai &lt;code&gt;\{number}&lt;/code&gt;.
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
