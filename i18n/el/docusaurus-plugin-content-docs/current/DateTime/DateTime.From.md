---
title: DateTime.From
---

# DateTime.From


## Description

Δημιουργεί μια datetime από την τιμή που δόθηκε.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Επιστρέφει μια τιμή <code>datetime</code> από το δεδομένο <code>value</code>. Μπορεί επίσης να παρέχεται ένα προαιρετικό <code>culture</code>(για παράδειγμα, "en-US").Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>DateTime.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>datetime</code>, επιστρέφει <code>value</code>. Οι τιμές των ακόλουθων τύπων μπορούν να μετατραπούν σε τιμή <code>datetime</code>:      <ul>        <li><code>text</code>: Μια τιμή <code>datetime</code> από αναπαράσταση κειμένου. Ανατρέξτε στο <code>DateTime.FromText</code> για λεπτομέρειες.</li>        <li><code>date</code>: Ένα <code>datetime</code> με <code>value</code> ως στοιχείο ημερομηνίας και το <code>12 :00:00 π.μ.</code> ως στοιχείο ώρας.</li>        <li><code>datetimezone</code>: Το τοπικό <code>datetime</code> ισοδύναμο του <code>value</code>.</li>        <li><code>time</code>: Ένα <code>datetime</code> με το ισοδύναμο ημερομηνίας του OLE Automation Date <code>0</code> ως στοιχείο ημερομηνίας και <code>value</code> ως στοιχείο ώρας.</li>        <li><code>number</code>: Ένα ισοδύναμο <code>datetime</code> της Ημερομηνίας Αυτοματισμού OLE που εκφράζεται με <code>value</code>. </li>      </ul>Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, επιστρέφεται ένα σφάλμα.


## Examples

### Example #1 
Μετατρέψτε το &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; σε τιμή &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Μετατρέψτε το &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; σε τιμή &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
