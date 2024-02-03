---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Δημιουργεί μια ζώνη ημερομηνίας/ώρας από τοπικές, καθολικές και προσαρμοσμένες μορφές ζώνης ημερομηνίας/ώρας.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Δημιουργεί μια τιμή <code>datetimezone</code> από μια αναπαράσταση κειμένου, <code>text</code>. Μπορεί να παρέχεται μια προαιρετική παράμετρος <code>record</code>, <code>options</code>, για τον καθορισμό πρόσθετων ιδιοτήτων. Το <code>record</code> μπορεί να περιέχει τα ακόλουθα πεδία:<ul>   <li><code>Format</code>: Μια τιμή <code>text</code> που υποδεικνύει τη μορφή που θα χρησιμοποιηθεί. Για περισσότερες λεπτομέρειες, μεταβείτε στη διεύθυνση https://go.microsoft.com/fwlink/?linkid=2180104 και https://go.microsoft.com/fwlink/?linkid=2180105. Η παράλειψη αυτού του πεδίου ή η παροχή <code>null</code> θα έχει ως αποτέλεσμα την ανάλυση της ημερομηνίας με την καλύτερη δυνατή προσπάθεια.</li>   <li><code>Culture</code>: Όταν το <code>Format</code> δεν είναι null, το <code>Culture</code> ελέγχει ορισμένους προσδιοριστές μορφής. Για παράδειγμα, στο <code>"en-US"</code> <code>"MMM"</code> είναι <code>"Jan", "Feb", "Mar", ...</code>, ενώ στο <code>"ru-RU"</code> <code>"MMM"</code> είναι <code>"янв", "фев", "мар", ...</code>. Όταν το <code>Format</code> είναι <code>null</code>, το <code>Culture</code> ελέγχει την προεπιλεγμένη μορφή που θα χρησιμοποιηθεί. Όταν το <code>Culture</code> είναι <code>null</code> ή παραλείπεται, χρησιμοποιείται το <code>Culture.Current</code>.</li></ul>Για την υποστήριξη ροών εργασίας παλαιού τύπου, το <code>options</code> μπορεί επίσης να μια τιμή κειμένου. Αυτό έχει την ίδια συμπεριφορά σαν <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Μετατροπή &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; σε τιμή &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Μετατροπή με χρήση προσαρμοσμένης μορφής και της γερμανικής κουλτούρας.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Μετατροπή με χρήση ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
