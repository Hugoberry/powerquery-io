---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Επιστρέφει μια συνάρτηση σύγκρισης που χρησιμοποιεί τακτικούς κανόνες για τη σύγκριση τιμών.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Επιστρέφει μια συνάρτηση σύγκρισης που χρησιμοποιεί Κανόνες Τακτικής για να συγκρίνει τις παρεχόμενες τιμές <code>x</code> και <code>y</code>.<br />      <br />      Μια συνάρτηση σύγκρισης δέχεται δύο ορίσματα και επιστρέφει -1, 0 ή 1 με βάση το αν η πρώτη τιμή είναι μικρότερη, ίση ή μεγαλύτερη από τη δεύτερη.    


## Examples

### Example #1 
Χρησιμοποιώντας τακτικούς κανόνες, συγκρίνετε αν τα &#34;encyclopædia&#34; και &#34;encyclopaedia&#34; είναι ισοδύναμα. Σημειώστε ότι είναι ισοδύναμα με τη χρήση &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
