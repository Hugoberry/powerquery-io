---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Αντικαθιστά την καθορισμένη περιοχή γραμμών με τις παρεχόμενες γραμμές.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

Αντικαθιστά έναν καθορισμένο αριθμό γραμμών, `count`, στην είσοδο `table` με το καθορισμένο `rows`, αρχίζοντας μετά το `offset`. Η παράμετρος `rows` είναι μια λίστα εγγραφών.

-   `table`: Ο πίνακας όπου γίνεται η αντικατάσταση.
-   `offset`: Ο αριθμός των γραμμών που θα παραλειφθούν πριν από την αντικατάσταση.
-   `count`: Ο αριθμός των γραμμών για αντικατάσταση.
-   `rows`: Η λίστα των εγγραφών γραμμών για εισαγωγή στον `table` στη θέση που καθορίζεται από το `offset`.


## Examples

### Example #1
Ξεκινώντας από τη θέση 1, αντικαθιστά 3 γραμμές.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
