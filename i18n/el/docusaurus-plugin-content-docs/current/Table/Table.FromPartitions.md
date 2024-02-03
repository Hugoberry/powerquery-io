---
title: Table.FromPartitions
---

# Table.FromPartitions


## Description

Επιστρέφει έναν πίνακα που είναι το αποτέλεσμα του συνδυασμού ενός συνόλου πινάκων με διαμέριση.


## Syntax

```powerquery
Table.FromPartitions(
    partitionColumn as text,
    partitions as list,
    optional partitionColumnType as type
) as table
```


## Details

Επιστρέφει έναν πίνακα ο οποίος είναι το αποτέλεσμα του συνδυασμού ενός συνόλου πινάκων με διαμέριση, <code>partitions</code>. <code>partitionColumn</code> είναι το όνομα της στήλης για προσθήκη. Ο προεπιλεγμένος τύπος στήλης είναι <code>any</code>, αλλά μπορεί να καθοριστεί από το στοιχείο <code>partitionColumnType</code>.


## Examples

### Example #1 
Εύρεση τύπου στοιχείου από τη λίστα &lt;code&gt;\{number}&lt;/code&gt;.
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
