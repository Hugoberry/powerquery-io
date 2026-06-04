---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Συγκρότηση εγγραφής σε συμβολοσειρά ερωτήματος URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Συγκρότηση της εγγραφής `query` σε συμβολοσειρά ερωτήματος URI, χρησιμοποιώντας χαρακτήρες διαφυγής όπου απαιτείται.


## Examples

### Example #1
Κωδικοποίηση συμβολοσειράς ερωτήματος που περιέχει ορισμένους ειδικούς χαρακτήρες.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
