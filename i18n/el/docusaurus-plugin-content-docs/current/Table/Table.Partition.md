---
title: Table.Partition
---

# Table.Partition


## Description

Διαμερίζει τον πίνακα σε μια λίστα πινάκων με βάση τον αριθμό των καθορισμένων ομάδων και στηλών.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Details

Διαμερίζει τον <code>table</code> σε μια λίστα <code>groups</code> πινάκων, με βάση την τιμή της <code>column</code> και μιας συνάρτησης <code>hash</code>.    Η συνάρτηση <code>hash</code> εφαρμόζεται στην τιμή της γραμμής <code>column</code> για να λάβει μια τιμή κατακερματισμού για τη γραμμή. Το υπόλοιπο της τιμής κατακερματισμού <code>groups</code> προσδιορίζει σε ποιον από τους επιστρεφόμενους πίνακες θα τοποθετηθεί η γραμμή.    <ul>       <li><code>table</code>: Ο πίνακας για διαμέριση.</li>       <li><code>column</code>: Η στήλη κατακερματισμού για προσδιορισμό του επιστρεφόμενου πίνακα στον οποίο βρίσκεται η γραμμή.</li>       <li><code>groups</code>: Ο αριθμός των πινάκων στους οποίους θα διαμεριστεί ο πίνακας εισόδου.</li>       <li><code>hash</code>: Η συνάρτηση που εφαρμόζεται για να ληφθεί μια τιμή κατακερματισμού.</li>    </ul>  


## Examples

### Example #1 
Διαμερίστε τον πίνακα &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; σε 2 πίνακες στη στήλη [a], χρησιμοποιώντας την τιμή των στηλών ως συνάρτηση κατακερματισμού.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
