---
title: List.Modes
---

# List.Modes


## Description

Επιστρέφει μια λίστα με τις συχνότερες τιμές της λίστας.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Επιστρέφει το στοιχείο που εμφανίζεται συχνότερα στη λίστα, <code>list</code>. Εάν η λίστα είναι κενή, παρουσιάζεται εξαίρεση. Εάν εμφανίζονται πολλαπλά στοιχεία με την ίδια μέγιστη συχνότητα, επιλέγεται το τελευταίο.     Μια προαιρετική τιμή <code>comparisonCriteria</code>, <code>equationCriteria</code>, μπορεί να καθοριστεί για τον έλεγχο ισότητας. 


## Examples

### Example #1 
Βρείτε τα στοιχεία που εμφανίζονται συχνότερα στη λίστα &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
