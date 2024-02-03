---
title: Percentage.From
---

# Percentage.From


## Description

Επιστρέφει μια τιμή ποσοστού από τη δεδομένη τιμή.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Επιστρέφει μια τιμή <code>percentage</code> από το δεδομένο <code>value</code>. Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Percentage.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>κείμενο</code> με σύμβολο μετά τοις εκατό, τότε ο δεκαδικός αριθμός που έχει μετατραπεί θα επιστραφεί. Διαφορετικά, η τιμή θα μετατραπεί σε <code>number</code> χρησιμοποιώντας το <code>Number.From</code>. Μπορεί επίσης να παρέχεται ένα προαιρετικό <code>culture</code> (για παράδειγμα, "en-US").


## Examples

### Example #1 
Λάβετε την τιμή &lt;code&gt;percentage&lt;/code&gt; του &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
