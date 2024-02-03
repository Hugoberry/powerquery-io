---
title: Binary.From
---

# Binary.From


## Description

Δημιουργεί μια δυαδική τιμή από την τιμή που δόθηκε


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Επιστρέφει μια τιμή <code>binary</code> από το δεδομένο <code>value</code>. Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Binary.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>δυαδικό</code>, επιστρέφεται <code>value</code>. Οι τιμές των ακόλουθων τύπων μπορούν να μετατραπούν σε τιμή <code>binary</code>:      <ul>        <li><code>text</code>:: Μια τιμή <code>binary</code> από την αναπαράσταση κειμένου. Ανατρέξτε στο <code>Binary.FromText</code> για λεπτομέρειες.</li>      </ul>Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, επιστρέφεται ένα σφάλμα.


## Examples

### Example #1 
Λάβετε την τιμή &lt;code&gt;binary&lt;/code&gt; του &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
