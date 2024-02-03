---
title: Time.From
---

# Time.From


## Description

Δημιουργεί μια ώρα από την παρεχόμενη τιμή.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Επιστρέφει μια τιμή <code>time</code> από το δεδομένο <code>value</code>. Μπορεί επίσης να παρέχεται ένα προαιρετικό <code>culture</code> (για παράδειγμα, "en-US").Αν το δεδομένο<code>value</code> είναι <code>null</code>, το <code>Time.From</code> επιστρέφει <code>null</code>. Αν το δεδομένο <code>value</code> είναι <code>ώρα</code>, επιστρέφεται <code>value</code>. Οι τιμές των ακόλουθων τύπων μπορούν να μετατραπούν σε τιμή <code>time</code>:      <ul>        <li><code>text</code>: Μια τιμή <code>time</code> από αναπαράσταση κειμένου. Ανατρέξτε στο <code>Time.FromText</code> για λεπτομέρειες.</li>        <li><code>datetime</code>: Το στοιχείο ώρας του <code>value</code>.</li>        <li><code>datetimezone</code>: Το στοιχείο ώρας του τοπικού ισοδύναμου ημερομηνίας ώρας του <code>value</code>.</li>        <li><code>number</code>: Ένας <code>time</code> ισοδύναμος με τον αριθμό των κλασματικών ημερών που εκφράζεται με <code>value</code>. Αν <code>value</code> είναι αρνητικό ή μεγαλύτερο ή ίσο με 1, επιστρέφεται ένα σφάλμα.</li>      </ul>Αν <code>value</code> είναι οποιουδήποτε άλλου τύπου, επιστρέφεται ένα σφάλμα.


## Examples

### Example #1 
Μετατρέψτε το &lt;code&gt;0.7575&lt;/code&gt; σε μια τιμή &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Μετατρέψτε το &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; σε μια τιμή &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
