---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Αναπτύσσει μια στήλη εγγραφών σε στήλες με κάθε μία από τις τιμές.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Details

Με δεδομένη την <code>column</code> των εγγραφών στη <code>table</code> εισόδου, δημιουργεί έναν πίνακα με μια στήλη για κάθε πεδίο στην εγγραφή. Προαιρετικά, μπορεί να καθοριστεί η <code>newColumnNames</code> για να εξασφαλίσει μοναδικά ονόματα για τις στήλες στο νέο πίνακα.    <ul>        <li><code>table</code>: Ο αρχικός πίνακας με τη στήλη εγγραφών για ανάπτυξη. </li>        <li><code>column</code>: Η στήλη για ανάπτυξη.</li>        <li><code>fieldNames</code>: Η λίστα με τα πεδία για ανάπτυξη σε στήλες στον πίνακα.</li>        <li><code>newColumnNames</code>: Η λίστα με τα ονόματα των στηλών που θα δοθούν στις νέες στήλες. Τα νέα ονόματα στηλών δεν είναι δυνατό να είναι διπλότυπα οποιασδήποτε στήλης στο νέο πίνακα.</li>    </ul>


## Examples

### Example #1 
Αναπτύξτε τη στήλη [a] του πίνακα &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; σε 3 στήλες &#34;aa&#34;, &#34;bb&#34; και &#34;cc&#34;.
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
