---
title: List.MinN
---

# List.MinN


## Description

Επιστρέφει τις ελάχιστες τιμές στη λίστα. Μπορεί να καθοριστεί ο αριθμός των τιμών που θα επιστραφούν ή μια συνθήκη φιλτραρίσματος.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Επιστρέφει τις ελάχιστες τιμές στη λίστα <code>list</code>.     Η παράμετρος <code>countOrCondition</code> καθορίζει τον αριθμό των τιμών που θα επιστραφούν ή μια συνθήκη φιλτραρίσματος. Η προαιρετική παράμετρος <code>comparisonCriteria</code> καθορίζει τον τρόπο σύγκρισης των τιμών στη λίστα. <ul>        <li> <code>list</code>: Η λίστα τιμών.</li>        <li> <code>countOrCondition</code>: Εάν καθοριστεί αριθμός, επιστρέφεται μια λίστα με έως <code>countOrCondition</code> στοιχεία σε αύξουσα σειρά. Εάν καθοριστεί συνθήκη, επιστρέφεται μια λίστα με τα στοιχεία που ικανοποιούν αρχικά τη συνθήκη. Από τη στιγμή που ένα στοιχείο δεν ικανοποιεί τη συνθήκη, δεν εξετάζονται περαιτέρω στοιχεία. Εάν αυτή η παράμετρος είναι null, επιστρέφεται η μοναδική μικρότερη τιμή.</li><li><code>comparisonCriteria</code>: <i>[Optional]</i> Μια προαιρετική τιμή <code>comparisonCriteria</code> μπορεί να καθοριστεί προκειμένου να προσδιορίσει τον τρόπο σύγκρισης των στοιχείων της λίστας. Εάν αυτή η παράμετρος είναι null, χρησιμοποιείται η προεπιλεγμένη συνάρτηση σύγκρισης. 
 </li></ul>


## Examples

### Example #1 
Βρείτε τις 5 μικρότερες τιμές στη λίστα &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
