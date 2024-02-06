---
title: Table.FromPartitions
---

# Table.FromPartitions


वह तालिका लौटाता है जो एक विभाजित की गई तालिकाओं के सेट के संयोजन का परिणाम है.


## Syntax

```powerquery
Table.FromPartitions(
    partitionColumn as text,
    partitions as list,
    optional partitionColumnType as type
) as table
```


## Remarks

वह तालिका लौटाता है जो विभाजित तालिकाओं <code>partitions</code> के संयोजन का परिणाम है. <code>partitionColumn</code> जोड़े जाने वाले स्‍तंभ का नाम है. स्‍तंभ का प्रकार डिफ़ॉल्‍ट रूप से <code>कोई भी</code> होता है, लेकिन <code>partitionColumnType</code> द्वारा निर्दिष्ट किया जा सकता है.


## Examples

### Example #1 
सूची &lt;code&gt;\{number}&lt;/code&gt; से आइटम प्रकार ढूँढें.
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
