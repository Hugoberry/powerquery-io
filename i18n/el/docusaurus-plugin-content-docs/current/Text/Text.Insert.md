---
title: Text.Insert
---

# Text.Insert


## Description

Εισάγει μία τιμή κειμένου σε μια άλλη σε μια δεδομένη θέση.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Επιστρέφει το αποτέλεσμα της εισαγωγής της τιμής <code>newText</code> στην τιμή κειμένου <code>text</code> στη θέση <code>offset</code>. Η θέση ξεκινά από τον αριθμό 0.


## Examples

### Example #1 
Εισαγάγετε &#34;C&#34; μεταξύ του &#34;B&#34; και του &#34;D&#34; στο &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
