---
title: Byte.From
---

# Byte.From


## Description

Δημιουργεί έναν ακέραιο 8-bit από τη δεδομένη τιμή.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Επιστρέφει μια ακέραια τιμή 8-bit <code>number</code> από το δεδομένο <code>value</code>. Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Byte.From</code> επιστρέφει <code>null</code>. Εάν το δεδομένο <code>value</code> είναι ένας <code>number</code> εντός του εύρους ενός ακέραιου αριθμού 8-bit χωρίς κλασματικό μέρος, επιστρέφεται <code>value</code>. Εάν έχει κλασματικό τμήμα, τότε ο αριθμός στρογγυλοποιείται με τον καθορισμένο τρόπο στρογγυλοποίησης. Η προεπιλεγμένη λειτουργία στρογγυλοποίησης είναι <code>RoundingMode.ToEven</code>. Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, θα μετατραπεί πρώτα σε <code>αριθμός</code> χρησιμοποιώντας το <code>Number.FromText</code>. Ανατρέξτε στο <code>Number.Round</code> για τις διαθέσιμες λειτουργίες στρογγυλοποίησης. Μπορεί επίσης να παρέχεται ένα προαιρετικό <code>culture</code> (για παράδειγμα, "en-US").


## Examples

### Example #1 
Λάβετε την τιμή ακέραιου 8 bit &lt;code&gt;number&lt;/code&gt; του &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Λάβετε την τιμή ακέραιου 8 bit &lt;code&gt;number&lt;/code&gt; του &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; χρησιμοποιώντας το &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
