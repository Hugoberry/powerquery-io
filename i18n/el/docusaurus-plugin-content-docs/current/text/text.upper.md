---
title: Text.Upper
---

# Text.Upper


Μετατρέπει όλους τους χαρακτήρες σε κεφαλαίους.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Επιστρέφει το αποτέλεσμα της μετατροπής όλων των χαρακτήρων της τιμής `text` σε κεφαλαίους. Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή `culture` (για παράδειγμα, "en-US").


## Examples

### Example #1
Λάβετε την έκδοση του "AbCd" σε κεφαλαία.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
