---
title: Text.Insert
---

# Text.Insert


Εισάγει μία τιμή κειμένου σε μια άλλη σε μια δεδομένη θέση.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Επιστρέφει το αποτέλεσμα της εισαγωγής της τιμής `newText` στην τιμή κειμένου `text` στη θέση `offset`. Η θέση ξεκινά από τον αριθμό 0.


## Examples

### Example #1
Εισαγάγετε "C" μεταξύ του "B" και του "D" στο "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
