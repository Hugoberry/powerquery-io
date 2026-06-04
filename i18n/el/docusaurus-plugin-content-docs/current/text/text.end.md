---
title: Text.End
---

# Text.End


Επιστρέφει τους τελευταίους χαρακτήρες του κειμένου.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Επιστρέφει μια τιμή `text` που είναι οι τελευταίοι `count` χαρακτήρες της τιμής `text` `text`.


## Examples

### Example #1
Λάβετε τους τελευταίους 5 χαρακτήρες του κειμένου "Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
