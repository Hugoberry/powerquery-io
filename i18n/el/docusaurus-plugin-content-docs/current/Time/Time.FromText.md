---
title: Time.FromText
---

# Time.FromText


## Description

Δημιουργεί μια ώρα από τοπικές και καθολικές και προσαρμοσμένες μορφές ώρας.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Δημιουργεί μια τιμή <code>time</code> από μια αναπαράσταση κειμένου, <code>text</code>. Μπορεί να παρέχεται μια προαιρετική παράμετρος <code>record</code>, <code>options</code>, για τον καθορισμό πρόσθετων ιδιοτήτων. Το <code>record</code> μπορεί να περιέχει τα ακόλουθα πεδία:<ul>   <li><code>Format</code>: Μια τιμή <code>text</code> που υποδεικνύει τη μορφή που θα χρησιμοποιηθεί. Για περισσότερες λεπτομέρειες, μεταβείτε στη διεύθυνση https://go.microsoft.com/fwlink/?linkid=2180104 και https://go.microsoft.com/fwlink/?linkid=2180105. Η παράλειψη αυτού του πεδίου ή η παροχή του <code>null</code> θα έχει ως αποτέλεσμα την ανάλυση του χρόνου με την καλύτερη δυνατή προσπάθεια.</li>   <li><code>Culture</code>: Όταν το <code>Format</code> δεν είναι null, το <code>Culture</code> ελέγχει ορισμένους προσδιοριστές μορφής. Για παράδειγμα, στο <code>"en-US"</code> <code>"tt"</code> είναι <code>"AM" ή "PM"</code>, ενώ στο <code>"ar-EG"</code> <code>"tt"</code> είναι <code>"ص" ή "م"</code>. Όταν το <code>Format</code> είναι <code>null</code>, το <code>Culture</code> ελέγχει την προεπιλεγμένη μορφή που θα χρησιμοποιηθεί. Όταν το <code>Culture</code> είναι <code>null</code> ή παραλείπεται, χρησιμοποιείται το <code>Culture.Current</code>.</li></ul> Για την υποστήριξη ροών εργασίας παλαιού τύπου, το <code>options</code> μπορεί επίσης να μια τιμή κειμένου. Αυτό έχει την ίδια συμπεριφορά σαν <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Μετατρέψτε την &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; σε τιμή ώρας.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Μετατρέψτε το &lt;code&gt;&#34;1012&#34;&lt;/code&gt; σε τιμή ώρας.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Μετατρέψτε το &lt;code&gt;&#34;10&#34;&lt;/code&gt; σε τιμή ώρας.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
