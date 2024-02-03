---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

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


## Details

Αντικαθιστά έναν καθορισμένο αριθμό γραμμών, <code>count</code>, στην είσοδο <code>table</code> με το καθορισμένο <code>rows</code>, αρχίζοντας μετά το <code>offset</code>. Η παράμετρος <code>rows</code> είναι μια λίστα εγγραφών.    <ul>       <li><code>table</code>: Ο πίνακας όπου γίνεται η αντικατάσταση.</li>       <li><code>offset</code>: Ο αριθμός των γραμμών που θα παραλειφθούν πριν από την αντικατάσταση.</li>       <li><code>count</code>: Ο αριθμός των γραμμών για αντικατάσταση.</li>       <li><code>rows</code>: Η λίστα των εγγραφών γραμμών για εισαγωγή στον <code>table</code> στη θέση που καθορίζεται από το <code>offset</code>.</li>    </ul>


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
