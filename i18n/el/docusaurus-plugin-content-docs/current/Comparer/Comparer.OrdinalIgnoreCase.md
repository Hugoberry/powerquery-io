---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Επιστρέφει μια συνάρτηση σύγκρισης χωρίς διάκριση πεζών-κεφαλαίων η οποία χρησιμοποιεί τακτικούς κανόνες για τη σύγκριση τιμών.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Επιστρέφει μια συνάρτηση σύγκρισης χωρίς διάκριση πεζών-κεφαλαίων η οποία χρησιμοποιεί Κανόνες Τακτικής για να συγκρίνει τις παρεχόμενες τιμές <code>x</code>και <code>y</code>.<br />        <br />        Μια συνάρτηση σύγκρισης δέχεται δύο ορίσματα και επιστρέφει -1, 0 ή 1 με βάση το αν η πρώτη τιμή είναι μικρότερη, ίση ή μεγαλύτερη από τη δεύτερη.    


## Examples

### Example #1 
Συγκρίνετε τις τιμές &#34;Abc&#34; και &#34;abc&#34; χρησιμοποιώντας τακτικούς κανόνες χωρίς διάκριση πεζών-κεφαλαίων. Λάβετε υπόψη ότι η τιμή &#34;Abc&#34; είναι μικρότερη από την τιμή &#34;abc&#34; με χρήση της συνάρτησης &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
