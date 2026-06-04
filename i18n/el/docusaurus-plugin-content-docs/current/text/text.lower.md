---
title: Text.Lower
---

# Text.Lower


Μετατρέπει όλους τους χαρακτήρες σε πεζούς.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Επιστρέφει το αποτέλεσμα της μετατροπής όλων των χαρακτήρων της τιμής `text` σε πεζούς. Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή `culture` (για παράδειγμα, "en-US").


## Examples

### Example #1
Λάβετε την έκδοση του "AbCd" σε πεζούς χαρακτήρες.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
