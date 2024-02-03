---
title: Time.ToText
---

# Time.ToText


## Description

Επιστρέφει μια αναπαράσταση κειμένου της τιμής ώρας.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Επιστρέφει μια αναπαράσταση κειμένου του <code>time</code>. Μπορεί να παρέχεται μια προαιρετική παράμετρος <code>record</code>, <code>options</code>, για τον καθορισμό πρόσθετων ιδιοτήτων. Το <code>culture</code> χρησιμοποιείται μόνο για παλαιού τύπου ροές εργασίας. Το <code>record</code> μπορεί να περιέχει τα ακόλουθα πεδία:<ul>   <li><code>Format</code>: Μια τιμή <code>text</code> που υποδεικνύει τη μορφή που θα χρησιμοποιηθεί. Για περισσότερες λεπτομέρειες, μεταβείτε στη διεύθυνση https://go.microsoft.com/fwlink/?linkid=2180104 και https://go.microsoft.com/fwlink/?linkid=2180105. Η παράλειψη αυτού του πεδίου ή η παροχή <code>null</code> θα έχει ως αποτέλεσμα τη μορφοποίηση της ημερομηνίας χρησιμοποιώντας την προεπιλογή που ορίζεται από το <code>Culture</code>.</li>   <li><code>Culture</code>: Όταν το <code>Format</code> δεν είναι null, το <code>Culture</code> ελέγχει ορισμένους προσδιοριστές μορφής. Για παράδειγμα, στο <code>"en-US"</code> <code>"tt"</code> είναι <code>"AM" ή "PM"</code>, ενώ στο <code>"ar-EG"</code> <code>"tt"</code> είναι <code>"ص" ή "م"</code>. Όταν το <code>Format</code> είναι <code>null</code>, το <code>Culture</code> ελέγχει την προεπιλεγμένη μορφή που θα χρησιμοποιηθεί. Όταν το <code>Culture</code> είναι <code>null</code> ή παραλείπεται, χρησιμοποιείται το <code>Culture.Current</code>.</li></ul>Για την υποστήριξη ροών εργασίας παλαιού τύπου, τα <code>options</code> και <code>culture</code> μπορεί επίσης να είναι τιμές κειμένου. Αυτό έχει την ίδια συμπεριφορά σαν <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Μετατροπή &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; σε μια τιμή &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Το αποτέλεσμα μπορεί να διαφέρει ανάλογα με την τρέχουσα κουλτούρα.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Μετατροπή με χρήση προσαρμοσμένης μορφής και της γερμανικής κουλτούρας.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Μετατροπή με χρήση της τυπικής μορφής ώρας.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
