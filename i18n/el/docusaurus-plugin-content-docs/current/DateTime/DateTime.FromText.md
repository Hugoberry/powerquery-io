---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Δημιουργεί μια datetimezone από τοπικές και παγκόσμιες μορφές ημερομηνίας/ώρας.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Δημιουργεί μια τιμή <code>datetime</code> από μια αναπαράσταση κειμένου, <code>text</code>. Μπορεί να παρέχεται μια προαιρετική παράμετρος <code>record</code>, <code>options</code>, για τον καθορισμό πρόσθετων ιδιοτήτων. Το <code>record</code> μπορεί να περιέχει τα ακόλουθα πεδία:<ul>   <li><code>Format</code>: Μια τιμή <code>text</code> που υποδεικνύει τη μορφή που θα χρησιμοποιηθεί. Για περισσότερες λεπτομέρειες, μεταβείτε στη διεύθυνση https://go.microsoft.com/fwlink/?linkid=2180104 και https://go.microsoft.com/fwlink/?linkid=2180105. Η παράλειψη αυτού του πεδίου ή η παροχή <code>null</code> θα έχει ως αποτέλεσμα την ανάλυση της ημερομηνίας με την καλύτερη δυνατή προσπάθεια.</li>   <li><code>Culture</code>: Όταν το <code>Format</code> δεν είναι null, το <code>Culture</code> ελέγχει ορισμένους προσδιοριστές μορφής. Για παράδειγμα, στο <code>"en-US"</code> <code>"MMM"</code> είναι <code>"Jan", "Feb", "Mar", ...</code>, ενώ στο <code>"ru-RU"</code> <code>"MMM"</code> είναι <code>"янв", "фев", "мар", ...</code>. Όταν το <code>Format</code> είναι <code>null</code>, το <code>Culture</code> ελέγχει την προεπιλεγμένη μορφή που θα χρησιμοποιηθεί. Όταν το <code>Culture</code> είναι <code>null</code> ή παραλείπεται, χρησιμοποιείται το <code>Culture.Current</code>.</li></ul>Για την υποστήριξη ροών εργασίας παλαιού τύπου, το <code>options</code> μπορεί επίσης να μια τιμή κειμένου. Αυτό έχει την ίδια συμπεριφορά σαν <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Μετατροπή &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; σε τιμή ημερομηνίας/ώρας.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Μετατροπή &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; σε τιμή ημερομηνίας/ώρας.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Μετατροπή &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; σε τιμή ημερομηνίας/ώρας.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Μετατροπή &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; σε τιμή ημερομηνίας/ώρας.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
