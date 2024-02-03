---
title: Text.Start
---

# Text.Start


## Description

Επιστρέφει την αρχή του κειμένου.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Επιστρέφει τους πρώτους <code>count</code> χαρακτήρες του <code>text</code> ως τιμή κειμένου.


## Examples

### Example #1 
Λάβετε τους πρώτους 5 χαρακτήρες του κειμένου &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
