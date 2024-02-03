---
title: List.Mode
---

# List.Mode


## Description

Επιστρέφει την πιο συχνή τιμή της λίστας.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Επιστρέφει το στοιχείο που εμφανίζεται συχνότερα στη λίστα, <code>list</code>. Εάν η λίστα είναι κενή, παρουσιάζεται εξαίρεση. Εάν εμφανίζονται πολλαπλά στοιχεία με την ίδια μέγιστη συχνότητα, επιλέγεται το τελευταίο.     Μια προαιρετική τιμή <code>comparisonCriteria</code>, <code>equationCriteria</code>, μπορεί να καθοριστεί για τον έλεγχο ισότητας. 


## Examples

### Example #1 
Βρείτε το στοιχείο που εμφανίζεται συχνότερα στη λίστα &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Βρείτε το στοιχείο που εμφανίζεται συχνότερα στη λίστα &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
