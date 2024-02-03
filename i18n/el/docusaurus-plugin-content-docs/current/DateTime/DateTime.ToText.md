---
title: DateTime.ToText
---

# DateTime.ToText


## Description

Επιστρέφει μια αναπαράσταση κειμένου της τιμής datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Details

Επιστρέφει μια αναπαράσταση κειμένου του <code>dateTime</code>. Μπορεί να παρέχεται μια προαιρετική παράμετρος <code>record</code>, <code>options</code>, για τον καθορισμό πρόσθετων ιδιοτήτων. Το <code>culture</code> χρησιμοποιείται μόνο για παλαιού τύπου ροές εργασίας. Το <code>record</code> μπορεί να περιέχει τα ακόλουθα πεδία:<ul>   <li><code>Format</code>: Μια τιμή <code>text</code> που υποδεικνύει τη μορφή που θα χρησιμοποιηθεί. Για περισσότερες λεπτομέρειες, μεταβείτε στη διεύθυνση https://go.microsoft.com/fwlink/?linkid=2180104 και https://go.microsoft.com/fwlink/?linkid=2180105. Η παράλειψη αυτού του πεδίου ή η παροχή <code>null</code> θα έχει ως αποτέλεσμα τη μορφοποίηση της ημερομηνίας χρησιμοποιώντας την προεπιλογή που ορίζεται από το <code>Culture</code>.</li>   <li><code>Culture</code>: Όταν το <code>Format</code> δεν είναι null, το <code>Culture</code> ελέγχει ορισμένους προσδιοριστές μορφής. Για παράδειγμα, στο <code>"en-US"</code> <code>"MMM"</code> είναι <code>"Jan", "Feb", "Mar", ...</code>, ενώ στο <code>"ru-RU"</code> <code>"MMM"</code> είναι <code>"янв", "фев", "мар", ...</code>. Όταν το <code>Format</code> είναι <code>null</code>, το <code>Culture</code> ελέγχει την προεπιλεγμένη μορφή που θα χρησιμοποιηθεί. Όταν το <code>Culture</code> είναι <code>null</code> ή παραλείπεται, χρησιμοποιείται το <code>Culture.Current</code>.</li></ul>Για την υποστήριξη ροών εργασίας παλαιού τύπου, το <code>options</code> και το <code>culture</code> μπορεί επίσης να είναι τιμές κειμένου. Αυτό έχει την ίδια συμπεριφορά σαν <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Μετατροπή &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25)&lt;/code&gt; σε τιμή &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Το αποτέλεσμα μπορεί να διαφέρει ανάλογα με την τρέχουσα κουλτούρα.&lt;/i&gt;
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2 
Μετατροπή με χρήση προσαρμοσμένης μορφής και της γερμανικής κουλτούρας.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3 
Μετατροπή με χρήση του μοτίβου ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
