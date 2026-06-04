---
title: Text.Proper
---

# Text.Proper


Μετατρέπει σε κεφαλαίο το πρώτο γράμμα κάθε λέξης.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Επιστρέφει το αποτέλεσμα της κεφαλαιοποίησης μόνο του πρώτου γράμματος κάθε λέξης της τιμής κειμένου, `text`. Όλα τα υπόλοιπα γράμματα επιστρέφονται ως πεζά. Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή `culture` (για παράδειγμα, "en-US").


## Examples

### Example #1
Χρησιμοποιήστε την `Text.Proper` σε μια απλή πρόταση.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
