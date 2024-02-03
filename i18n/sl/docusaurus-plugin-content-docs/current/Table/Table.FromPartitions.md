---
title: Table.FromPartitions
---

# Table.FromPartitions


## Description

Vrne tabelo, ki je rezultat združitve nabora tabel, razdeljenih na particije.


## Syntax

```powerquery
Table.FromPartitions(
    partitionColumn as text,
    partitions as list,
    optional partitionColumnType as type
) as table
```


## Details

Vrne tabelo, ki je nastala zaradi združitve nabora razdeljenih tabel, <code>partitions</code>. <code>partitionColumn</code> predstavlja ime stolpca, ki ga boste dodali. Vrsta stolpca je privzeto nastavljena na <code>poljubno</code>, vendar jo lahko določite s/z <code>partitionColumnType</code>.


## Examples

### Example #1 
Poiščite vrsto elementa s seznama &lt;code&gt;\{number}&lt;/code&gt;.
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
