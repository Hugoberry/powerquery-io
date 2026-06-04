---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Επιστρέφει την τιμή της καθορισμένης μεταβλητής ή την προεπιλεγμένη τιμή αν η μεταβλητή δεν έχει οριστεί.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Επιστρέφει την τιμή της καθορισμένης μεταβλητής `identifier` που ορίζεται από το τρέχον περιβάλλον αξιολόγησης. Αν η μεταβλητή δεν έχει οριστεί, επιστρέφεται η προαιρετική `defaultValue`.



## Category
Values.Implementation
