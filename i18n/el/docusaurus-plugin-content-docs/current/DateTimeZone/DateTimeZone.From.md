---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Δημιουργεί μια datetimezone από την τιμή που δόθηκε.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Επιστρέφει μια τιμή <code>datetimezone</code> από το δεδομένο <code>value</code>. Μπορεί επίσης να παρέχεται ένα προαιρετικό <code>culture</code>(για παράδειγμα, "en-US").Εάν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>DateTimeZone.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>datetimezone</code>, επιστρέφεται <code>value</code>. Οι τιμές των ακόλουθων τύπων μπορούν να μετατραπούν σε τιμή <code>datetimezone</code>:      <ul>        <li><code>text</code>: Μια τιμή <code>datetimezone</code> από αναπαράσταση κειμένου. Ανατρέξτε στο <code>DateTimeZone.FromText</code> για λεπτομέρειες.</li>        <li><code>date</code>: Μια <code>datetimezone</code> με <code>value</code> ως στοιχείο ημερομηνίας, <code>12 :00:00 πμ</code> ως το στοιχείο ώρας και η μετατόπιση που αντιστοιχεί στην τοπική ζώνη ώρας.</li>        <li><code>datetime</code>: Μια <code>datetimezone</code> με <code>value</code> ως το datetime και η μετατόπιση που αντιστοιχεί στην τοπική ζώνη ώρας.</li>        <li><code>time</code>: Μια <code>datetimezone</code> με ισοδύναμο ημερομηνίας της Ημερομηνίας Αυτοματισμού OLE του <code>0</code> ως στοιχείο ημερομηνίας, <code>value</code> ως στοιχείο ώρας και μετατόπιση που αντιστοιχεί στην τοπική ζώνη ώρας.</li>        <li><code>number</code>: Ένα <code>datetimezone</code> με το ισοδύναμο ημερομηνίας ώρας. της Ημερομηνίας Αυτοματισμού OLE που εκφράζεται με <code>value</code> και της μετατόπισης που αντιστοιχεί στην τοπική ζώνη ώρας.</li>      </ul>Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, επιστρέφεται ένα σφάλμα.


## Examples

### Example #1 
Μετατρέψτε το &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; σε τιμή &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
