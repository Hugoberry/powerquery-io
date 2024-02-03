---
title: Table.FromPartitions
---

# Table.FromPartitions


## Description

Бөлінген кестелердің жиынтығын біріктіру нәтижесі болып табылатын кестені қайтарады.


## Syntax

```powerquery
Table.FromPartitions(
    partitionColumn as text,
    partitions as list,
    optional partitionColumnType as type
) as table
```


## Details

Бөлінген кестелердің жиынтығын біріктіру нәтижесі болып табылатын кестені береді, <code>partitions</code>. <code>partitionColumn</code> - қосу қажет баған атауы. Әдепкі баған түрі <code>кез келген</code>, бірақ <code>partitionColumnType</code> арқылы көрсетуге болады.


## Examples

### Example #1 
Элемент түрін &lt;code&gt;\{number}&lt;/code&gt; тізімінен табыңыз.
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
