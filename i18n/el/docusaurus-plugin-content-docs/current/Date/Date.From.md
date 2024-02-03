---
title: Date.From
---

# Date.From


## Description

Δημιουργεί μια ημερομηνία από την τιμή που δόθηκε.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Επιστρέφει μια τιμή <code>date</code> από το δεδομένο <code>value</code>. Μπορεί επίσης να παρέχεται ένα προαιρετικό <code>culture</code>(για παράδειγμα, "en-US").Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Date.From</code> επιστρέφει <code>null</code>. Εάν το δεδομένο <code>value</code> είναι <code>date</code>, επιστρέφει <code>value</code>. Οι τιμές των ακόλουθων τύπων μπορούν να μετατραπούν σε τιμή <code>date</code>:      <ul>        <li><code>text</code>: Μια τιμή <code>date</code> από αναπαράσταση κειμένου. Ανατρέξτε στο <code>Date.FromText</code> για λεπτομέρειες.</li>        <li><code>datetime</code>: Το στοιχείο ημερομηνίας του <code>value</code>.</li>        <li><code>datetimezone</code>: Το στοιχείο ημερομηνίας του τοπικού ισοδύναμου ημερομηνίας ώρας του <code>value</code>.</li>        <li><code>number</code>: Το στοιχείο ημερομηνίας του ισοδύναμου ημερομηνίας ώρας της Ημερομηνίας Αυτοματισμού OLE που εκφράζεται με <code>value</code>.</li>      </ul>Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, επιστρέφεται ένα σφάλμα.


## Examples

### Example #1 
Μετατρέψτε το &lt;code&gt;43910&lt;/code&gt; σε τιμή &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Μετατρέψτε το &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; σε μια τιμή &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
