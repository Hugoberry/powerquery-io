---
title: Logical.ToText
---

# Logical.ToText


## Description

Επιστρέφει το κείμενο &#34;true&#34; ή &#34;false&#34; δοθείσης μιας λογικής τιμής.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Δημιουργεί μια τιμή κειμένου από τη λογική τιμή <code>logicalValue</code>, <code>true</code> ή <code>false</code>. Εάν η <code>logicalValue</code> δεν είναι μια λογική τιμή, παρουσιάζεται εξαίρεση.


## Examples

### Example #1 
Δημιουργήστε μια τιμή κειμένου από τη λογική τιμή &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
