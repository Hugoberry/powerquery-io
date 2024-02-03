---
title: Date.ToText
---

# Date.ToText


## Description

Επιστρέφει μια αναπαράσταση κειμένου της τιμής ημερομηνίας.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Επιστρέφει μια αναπαράσταση κειμένου του <code>date</code>. Μπορεί να παρέχεται μια προαιρετική παράμετρος <code>record</code>, <code>options</code>, για τον καθορισμό πρόσθετων ιδιοτήτων. Το <code>culture</code> χρησιμοποιείται μόνο για παλαιού τύπου ροές εργασίας. Το <code>record</code> μπορεί να περιέχει τα ακόλουθα πεδία:<ul>   <li><code>Format</code>: Μια τιμή <code>text</code> που υποδεικνύει τη μορφή που θα χρησιμοποιηθεί. Για περισσότερες λεπτομέρειες, μεταβείτε στη διεύθυνση https://go.microsoft.com/fwlink/?linkid=2180104 και https://go.microsoft.com/fwlink/?linkid=2180105. Η παράλειψη αυτού του πεδίου ή η παροχή <code>null</code> θα έχει ως αποτέλεσμα τη μορφοποίηση της ημερομηνίας χρησιμοποιώντας την προεπιλογή που ορίζεται από το <code>Culture</code>.</li>   <li><code>Culture</code>: Όταν το <code>Format</code> δεν είναι null, το <code>Culture</code> ελέγχει ορισμένους προσδιοριστές μορφής. Για παράδειγμα, στο <code>"en-US"</code> <code>"MMM"</code> είναι <code>"Jan", "Feb", "Mar", ...</code>, ενώ στο <code>"ru-RU"</code> <code>"MMM"</code> είναι <code>"янв", "фев", "мар", ...</code>. Όταν το <code>Format</code> είναι <code>null</code>, το <code>Culture</code> ελέγχει την προεπιλεγμένη μορφή που θα χρησιμοποιηθεί. Όταν το <code>Culture</code> είναι <code>null</code> ή παραλείπεται, χρησιμοποιείται το <code>Culture.Current</code>.</li></ul>Για την υποστήριξη ροών εργασίας παλαιού τύπου, το <code>options</code> και το <code>culture</code> μπορεί επίσης να είναι τιμές κειμένου. Αυτό έχει την ίδια συμπεριφορά σαν <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Μετατροπή &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; σε τιμή &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Το αποτέλεσμα μπορεί να διαφέρει ανάλογα με την τρέχουσα κουλτούρα.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Μετατροπή με χρήση προσαρμοσμένης μορφής και της γερμανικής κουλτούρας.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Βρείτε το έτος στο ημερολόγιο Χίζρι που αντιστοιχεί στην 1η Ιανουαρίου 2000 στο Γρηγοριανό ημερολόγιο.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
