---
title: Date.FromText
---

# Date.FromText


## Description

Δημιουργεί μια ημερομηνία από τοπικές, καθολικές και προσαρμοσμένες μορφές ημερομηνίας.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Δημιουργεί μια τιμή <code>date</code> από μια αναπαράσταση κειμένου, <code>text</code>. Μπορεί να παρέχεται μια προαιρετική παράμετρος <code>record</code>, <code>options</code>, για τον καθορισμό πρόσθετων ιδιοτήτων. Η <code>record</code> μπορεί να περιέχει τα ακόλουθα πεδία:<ul>   <li><code>Format</code>: Μια τιμή <code>text</code> που υποδεικνύει τη μορφή που θα χρησιμοποιηθεί. Για περισσότερες λεπτομέρειες, μεταβείτε στη διεύθυνση https://go.microsoft.com/fwlink/?linkid=2180104 και https://go.microsoft.com/fwlink/?linkid=2180105. Η παράλειψη αυτού του πεδίου ή η παροχή <code>null</code> θα έχει ως αποτέλεσμα την ανάλυση της ημερομηνίας με την καλύτερη δυνατή προσπάθεια.</li>   <li><code>Culture</code>: Όταν το <code>Format</code> δεν είναι null, το <code>Culture</code> ελέγχει ορισμένους προσδιοριστές μορφής. Για παράδειγμα, στο <code>"en-US"</code> <code>"MMM"</code> είναι <code>"Jan", "Feb", "Mar", ...</code>, ενώ στο <code>"ru-RU"</code> <code>"MMM"</code> είναι <code>"янв", "фев", "мар", ...</code>. Όταν το <code>Format</code> είναι <code>null</code>, το <code>Culture</code> ελέγχει την προεπιλεγμένη μορφή που θα χρησιμοποιηθεί. Όταν το <code>Culture</code> είναι <code>null</code> ή παραλείπεται, χρησιμοποιείται το <code>Culture.Current</code>.</li></ul>Για την υποστήριξη ροών εργασίας παλαιού τύπου, το <code>options</code> μπορεί επίσης να μια τιμή κειμένου. Αυτό έχει την ίδια συμπεριφορά σαν <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Μετατροπή &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; σε τιμή &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Μετατροπή με χρήση προσαρμοσμένης μορφής και της γερμανικής κουλτούρας.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Βρείτε την ημερομηνία στο Γρηγοριανό ημερολόγιο που αντιστοιχεί στην αρχή του 1400 στο ημερολόγιο Χίζρι.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
