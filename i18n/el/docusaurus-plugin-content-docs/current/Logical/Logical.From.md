---
title: Logical.From
---

# Logical.From


## Description

Δημιουργεί μια λογική τιμή από την τιμή που δόθηκε.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Επιστρέφει μια τιμή <code>logical</code> από το δεδομένο <code>value</code>. Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Logical.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>logical</code>, επιστρέφεται <code>value</code>. Οι τιμές των ακόλουθων τύπων μπορούν να μετατραπούν σε τιμή <code>logical</code>:      <ul>        <li><code>text</code>: Μια τιμή <code>logical</code> από την τιμή κειμένου, είτε <code>"true"</code> είτε <code>"false"</code>. Ανατρέξτε στο <code>Logical.FromText</code> για λεπτομέρειες.</li>        <li><code>number</code>: <code>false</code> αν <code>value</code> ισούται με <code>0</code>, <code>true</code> διαφορετικά.</li>      </ul>Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, επιστρέφεται ένα σφάλμα.


## Examples

### Example #1 
Μετατρέψτε το &lt;code&gt;2&lt;/code&gt; σε τιμή &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
