---
title: Text.End
---

# Text.End


## Description

Επιστρέφει τους τελευταίους χαρακτήρες του κειμένου.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Επιστρέφει μια τιμή <code>text</code> που είναι οι τελευταίοι <code>count</code> χαρακτήρες της τιμής <code>text</code> <code>text</code>.


## Examples

### Example #1 
Λάβετε τους τελευταίους 5 χαρακτήρες του κειμένου &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
