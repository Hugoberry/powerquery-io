---
title: Text.Select
---

# Text.Select


## Description

Καταργεί όλες τις εμφανίσεις του δεδομένου χαρακτήρα ή λίστας χαρακτήρων από την τιμή κειμένου εισόδου.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Επιστρέφει ένα αντίγραφο της τιμής κειμένου <code>text</code> έχοντας καταργήσει όλους τους χαρακτήρες που δεν περιέχονται στο <code>selectChars</code>.  


## Examples

### Example #1 
Επιλέξτε όλους τους χαρακτήρες στην περιοχή από &#34;a&#34; έως &#34;z&#34; από την τιμή κειμένου.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
