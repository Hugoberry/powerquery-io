---
title: Duration.FromText
---

# Duration.FromText


## Description

Επιστρέφει μια τιμή διάρκειας από μορφές κειμένου του χρόνου που πέρασε (η.ω:λ:δ).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Επιστρέφει μια τιμή διάρκειας από το καθορισμένο κείμενο <code>text</code>. Οι ακόλουθες μορφές μπορούν να αναλυθούν από αυτήν τη συνάρτηση:  <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Όλες οι περιοχές περιλαμβάνουν την μικρότερη και τη μεγαλύτερη τιμή)<br />        ddd: Αριθμός ημερών.<br />        hh: Αριθμός ωρών, μεταξύ 0 και 23.<br />        mm: Αριθμός λεπτών, μεταξύ 0 και 59.<br />        ss: Αριθμός δευτερολέπτων, μεταξύ 0 και 59.<br />        ff: Κλάσμα δευτερολέπτων, μεταξύ 0 και 9999999.


## Examples

### Example #1 
Μετατρέψτε την &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; σε μια τιμή &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
