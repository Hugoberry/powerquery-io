---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Αντικαθιστά τις τιμές σφαλμάτων στις καθορισμένες στήλες με την αντίστοιχη τιμή που καθορίζεται.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Αντικαθιστά τις τιμές σφαλμάτων στις καθορισμένες στήλες του στοιχείου <code>table</code> με τις νέες τιμές στη λίστα <code>errorReplacement</code>. Η μορφή της λίστας είναι \{\{column1, value1}, …}. Μόνο μία τιμή αντικατάστασης επιτρέπεται ανά στήλη. Αν καθορίσετε τη στήλη περισσότερες από μία φορά, θα παρουσιαστεί σφάλμα.


## Examples

### Example #1 
Αντικαθιστά την τιμή σφάλματος με το κείμενο &#34;world&#34; στον πίνακα.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2 
Αντικαθιστά την τιμή σφάλματος στη στήλη A με το κείμενο &#34;hello&#34; και στη στήλη B με το κείμενο &#34;world&#34; στον πίνακα.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
