---
title: Single.From
---

# Single.From


## Description

Δημιουργεί μια μονή τιμή από την παρεχόμενη τιμή.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Επιστρέφει μια μοναδική τιμή <code>number</code> από το δεδομένο <code>value</code>. Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Single.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>number</code> εντός του εύρους Single, επιστρέφεται <code>value</code>, διαφορετικά επιστρέφεται ένα σφάλμα. Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, θα μετατραπεί πρώτα σε <code>αριθμός</code> χρησιμοποιώντας το <code>Number.FromText</code>. Μπορεί επίσης να παρέχεται ένα προαιρετικό <code>culture</code>(για παράδειγμα, "en-US").


## Examples

### Example #1 
Λάβετε τη μονή τιμή &lt;code&gt;number&lt;/code&gt; του &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
