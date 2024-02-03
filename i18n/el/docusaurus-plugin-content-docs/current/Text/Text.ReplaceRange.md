---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Καταργεί ένα εύρος χαρακτήρων και εισάγει μια νέα τιμή σε μια καθορισμένη θέση.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

Επιστρέφει το αποτέλεσμα της κατάργησης ενός αριθμού χαρακτήρων, <code>count</code>, από την τιμή κειμένου <code>text</code> ξεκινώντας από τη θέση <code>offset</code> και εισαγάγοντας στη συνέχεια την τιμή κειμένου <code>newText</code> στην ίδια θέση του <code>text</code>.


## Examples

### Example #1 
Αντικαταστήστε έναν χαρακτήρα στη θέση 2 της τιμής κειμένου &#34;ABGF&#34; με τη νέα τιμή κειμένου &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
