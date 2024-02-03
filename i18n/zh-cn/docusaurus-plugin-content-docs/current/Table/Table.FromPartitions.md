---
title: Table.FromPartitions
---

# Table.FromPartitions


## Description

返回作为组合一组分区表的结果的表。


## Syntax

```powerquery
Table.FromPartitions(
    partitionColumn as text,
    partitions as list,
    optional partitionColumnType as type
) as table
```


## Details

返回为组合分区表 <code>partitions</code> 集的结果的表。<code>partitionColumn</code> 是要添加的列名称。列类型默认为 <code>any</code>，但可以由 <code>partitionColumnType</code> 指定。


## Examples

### Example #1 
从列表 &lt;code&gt;\{number}&lt;/code&gt; 中找到项类型。
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
