---
title: Table.FromPartitions
---

# Table.FromPartitions


## Description

Returns a table that is the result of combining a set of partitioned tables.


## Syntax

```powerquery
Table.FromPartitions(
    partitionColumn as text,
    partitions as list,
    optional partitionColumnType as type
) as table
```


## Details

Returns a table that is the result of combining a set of partitioned tables, <code>partitions</code>. <code>partitionColumn</code> is the name of the column to add. The type of the column defaults to <code>any</code>, but can be specified by <code>partitionColumnType</code>.


## Examples

### Example #1 
Find item type from the list &lt;code&gt;\{number}&lt;/code&gt;.
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
