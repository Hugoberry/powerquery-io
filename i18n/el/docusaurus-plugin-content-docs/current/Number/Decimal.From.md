---
title: Decimal.From
---

# Decimal.From


## Description

Δημιουργεί μια δεκαδική τιμή από την παρεχόμενη τιμή.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Επιστρέφει μια δεκαδική τιμή <code>number</code> από το δεδομένο <code>value</code>. Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Decimal.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>number</code> εντός του εύρους του Δεκαδικού, επιστρέφεται <code>value</code>, διαφορετικά επιστρέφεται ένα σφάλμα. Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, θα μετατραπεί πρώτα σε <code>αριθμός</code> χρησιμοποιώντας το <code>Number.FromText</code>. Μπορεί επίσης να παρέχεται ένα προαιρετικό <code>culture</code>(για παράδειγμα, "en-US").


## Examples

### Example #1 
Λάβετε την τιμή δεκαδικού &lt;code&gt;number&lt;/code&gt; του &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
