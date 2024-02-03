---
title: Text.Upper
---

# Text.Upper


## Description

Μετατρέπει όλους τους χαρακτήρες σε κεφαλαίους.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Επιστρέφει το αποτέλεσμα της μετατροπής όλων των χαρακτήρων της τιμής <code>text</code> σε κεφαλαίους. Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή <code>culture</code> (για παράδειγμα, "en-US").


## Examples

### Example #1 
Λάβετε την έκδοση του &#34;AbCd&#34; σε κεφαλαία.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
