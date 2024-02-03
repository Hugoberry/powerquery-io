---
title: Duration.From
---

# Duration.From


## Description

Δημιουργεί μια διάρκεια από την τιμή που δόθηκε.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Επιστρέφει μια τιμή <code>duration</code> από το δεδομένο <code>value</code>. Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Duration.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>duration</code>, επιστρέφεται <code>value</code>. Οι τιμές των ακόλουθων τύπων μπορούν να μετατραπούν σε τιμή <code>duration</code>:      <ul>        <li><code>text</code>: Μια τιμή <code>duration</code> από φόρμες χρόνου που έχει παρέλθει στο κείμενο (δ:μ:ς). Ανατρέξτε στο <code>Duration.FromText</code> για λεπτομέρειες.</li>        <li><code>number</code>: Μια <code>duration</code> ισοδύναμη με τον αριθμό των ολόκληρων και των κλασματικών ημερών που εκφράζονται από <code>value</code>.</li>      </ul>Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, επιστρέφεται ένα σφάλμα.


## Examples

### Example #1 
Μετατρέψτε την &lt;code&gt;2.525&lt;/code&gt; σε μια τιμή &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
