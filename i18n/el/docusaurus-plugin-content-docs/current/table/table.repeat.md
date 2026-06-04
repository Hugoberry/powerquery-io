---
title: Table.Repeat
---

# Table.Repeat


Επαναλαμβάνει τις γραμμές των πινάκων κατά έναν καθορισμένο αριθμό φορών.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Επιστρέφει έναν πίνακα με τις γραμμές από την είσοδο `table` επαναλαμβανόμενες κατά τις καθορισμένες `count` φορές.


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
