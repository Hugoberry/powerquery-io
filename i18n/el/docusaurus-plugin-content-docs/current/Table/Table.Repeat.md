---
title: Table.Repeat
---

# Table.Repeat


## Description

Επαναλαμβάνει τις γραμμές των πινάκων κατά έναν καθορισμένο αριθμό φορών.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Επιστρέφει έναν πίνακα με τις γραμμές από την είσοδο <code>table</code> επαναλαμβανόμενες κατά τις καθορισμένες <code>count</code> φορές.


## Examples

### Example #1 
Επαναλαμβάνει τις γραμμές του πίνακα δύο φορές.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations
