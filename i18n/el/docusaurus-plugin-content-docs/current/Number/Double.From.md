---
title: Double.From
---

# Double.From


## Description

Δημιουργεί διπλή τιμή από την παρεχόμενη τιμή.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Επιστρέφει μια διπλή τιμή <code>number</code> από το δεδομένο <code>value</code>. Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Double.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>number</code> εντός του εύρους Double, επιστρέφεται <code>value</code>, διαφορετικά επιστρέφεται σφάλμα. Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, θα μετατραπεί πρώτα σε <code>number</code> χρησιμοποιώντας το <code>Number.FromText</code>. Μπορεί επίσης να παρέχεται ένα προαιρετικό <code>culture</code>(για παράδειγμα, "en-US").


## Examples

### Example #1 
Λάβετε τη διπλή τιμή &lt;code&gt;number&lt;/code&gt; του &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
