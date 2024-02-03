---
title: Number.ToText
---

# Number.ToText


## Description

Μετατρέπει τον δεδομένο αριθμό σε κείμενο.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Μετατρέπει την αριθμητική τιμή <code>number</code> σε τιμή κειμένου σύμφωνα με τη μορφή που καθορίζεται από <code>format</code>.<br />    <br />    Η μορφή είναι μια τιμή κειμένου που υποδεικνύει τον τρόπο μετατροπής του αριθμού. Για περισσότερες λεπτομέρειες σχετικά με τις υποστηριζόμενες τιμές μορφοποίησης, μεταβείτε στο https://go.microsoft.com/fwlink/?linkid=2241210 και το https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Μπορεί επίσης να παρέχεται μια προαιρετική <code>culture</code> (για παράδειγμα, "en-US") για τον έλεγχο της συμπεριφοράς <code>format</code> που εξαρτάται από την κουλτούρα.


## Examples

### Example #1 
Μετατροπή ενός αριθμού σε κείμενο χωρίς καθορισμό μορφής.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Μετατροπή ενός αριθμού σε εκθετική μορφή.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Μετατροπή αριθμού σε μορφή ποσοστού με μία μόνο δεκαδική θέση.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
