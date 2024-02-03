---
title: Table.FromPartitions
---

# Table.FromPartitions


## Description

Particionált táblák csoportjának tartalmát egyesítő tábla visszaadása.


## Syntax

```powerquery
Table.FromPartitions(
    partitionColumn as text,
    partitions as list,
    optional partitionColumnType as type
) as table
```


## Details

A(z) <code>partitions</code> paraméterben megadott particionált táblák csoportjának egyesítésével képzett tábla visszaadása. A felveendő oszlop nevét a(z) <code>partitionColumn</code> paraméter adja meg. Az oszlop alapértelmezett típusa  <code>any</code>, ami a(z) <code>partitionColumnType</code> paraméterrel módosítható.


## Examples

### Example #1 
Elemtípus megkeresése a &lt;code&gt;\{number}&lt;/code&gt; listában.
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
