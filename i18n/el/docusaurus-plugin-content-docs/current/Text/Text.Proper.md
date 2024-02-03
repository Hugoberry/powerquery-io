---
title: Text.Proper
---

# Text.Proper


## Description

Μετατρέπει σε κεφαλαίο το πρώτο γράμμα κάθε λέξης.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Επιστρέφει το αποτέλεσμα της κεφαλαιοποίησης μόνο του πρώτου γράμματος κάθε λέξης της τιμής κειμένου, <code>text</code>. Όλα τα υπόλοιπα γράμματα επιστρέφονται ως πεζά. Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή <code>culture</code> (για παράδειγμα, "en-US").


## Examples

### Example #1 
Χρησιμοποιήστε την &lt;code&gt;Text.Proper&lt;/code&gt; σε μια απλή πρόταση.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
