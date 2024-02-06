---
title: Table.FromPartitions
---

# Table.FromPartitions


Bölümlenen bir tablo kümesini birleştirmenin sonucu olan bir tablo döndürür.


## Syntax

```powerquery
Table.FromPartitions(
    partitionColumn as text,
    partitions as list,
    optional partitionColumnType as type
) as table
```


## Remarks

Bölünmüş tabloların kümesinin birleştirilmesinin sonucu olan bir tabloyu, <code>partitions</code> döndürür. <code>partitionColumn</code> eklenecek sütunun adıdır. Sütunun türü varsayılan olarak <code>any</code> şeklinde ayarlanır ancak <code>partitionColumnType</code> ile belirtilebilir.


## Examples

### Example #1 
Liste &lt;code&gt;\{number}&lt;/code&gt; içinden öğe türünü bulun.
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
