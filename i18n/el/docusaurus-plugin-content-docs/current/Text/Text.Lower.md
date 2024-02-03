---
title: Text.Lower
---

# Text.Lower


## Description

Μετατρέπει όλους τους χαρακτήρες σε πεζούς.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Επιστρέφει το αποτέλεσμα της μετατροπής όλων των χαρακτήρων της τιμής <code>text</code> σε πεζούς. Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή <code>culture</code> (για παράδειγμα, "en-US").


## Examples

### Example #1 
Λάβετε την έκδοση του &#34;AbCd&#34; σε πεζούς χαρακτήρες.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
