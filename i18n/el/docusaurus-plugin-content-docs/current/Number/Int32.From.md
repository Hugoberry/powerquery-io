---
title: Int32.From
---

# Int32.From


## Description

Δημιουργεί έναν ακέραιο 32 bit από την παρεχόμενη τιμή.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Επιστρέφει μια τιμή ακέραιου <code>number</code> 32 bit από το δεδομένο <code>value</code>. Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Int32.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>number</code> εντός του εύρους ακέραιου αριθμού 32 bit χωρίς κλασματικό τμήμα, επιστρέφεται <code>value</code>. Αν έχει κλασματικό τμήμα, τότε ο αριθμός στρογγυλοποιείται με τον καθορισμένο τρόπο στρογγυλοποίησης. Η προεπιλεγμένη λειτουργία στρογγυλοποίησης είναι <code>RoundingMode.ToEven</code>. Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, θα μετατραπεί πρώτα σε <code>number</code> χρησιμοποιώντας το <code>Number.FromText</code>. Ανατρέξτε στο <code>Number.Round</code> για τις διαθέσιμες λειτουργίες στρογγυλοποίησης. Μπορεί επίσης να παρέχεται ένα προαιρετικό <code>culture</code>(για παράδειγμα, "en-US").


## Examples

### Example #1 
Λάβετε την τιμή ακέραιου 32 bit &lt;code&gt;number&lt;/code&gt; του &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Λάβετε την τιμή ακέραιου 32 bit &lt;code&gt;number&lt;/code&gt; του &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; χρησιμοποιώντας το &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
