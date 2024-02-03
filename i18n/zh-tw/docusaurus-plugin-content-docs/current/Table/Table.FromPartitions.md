---
title: Table.FromPartitions
---

# Table.FromPartitions


## Description

傳回結合一組分割資料表結果的資料表。


## Syntax

```powerquery
Table.FromPartitions(
    partitionColumn as text,
    partitions as list,
    optional partitionColumnType as type
) as table
```


## Details

傳回資料表，其為結合一組已分割表格 <code>partitions</code> 的結果。<code>partitionColumn</code> 為要新增的資料行名稱。資料行值預設為 <code>any</code>，但可由 <code>partitionColumnType</code> 指定。


## Examples

### Example #1 
從清單 &lt;code&gt;\{number}&lt;/code&gt; 中尋找項目類型。
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
