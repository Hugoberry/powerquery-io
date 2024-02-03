---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Επιστρέφει την τιμή &#34;true&#34; αν ένας τύπος είναι τύπου null. Διαφορετικά, επιστρέφει την τιμή &#34;false&#34;.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Επιστρέφει την τιμή <code>true</code> αν ένας τύπος μπορεί να έχει τιμή <code>nullable</code>. Διαφορετικά επιστρέφει την τιμή <code>false</code>.


## Examples

### Example #1 
Προσδιορισμός του κατά πόσο το στοιχείο &lt;code&gt;number&lt;/code&gt; μπορεί να έχει τιμή null.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Προσδιορισμός του κατά πόσο το στοιχείο &lt;code&gt;type nullable number&lt;/code&gt; μπορεί να έχει τιμή null.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
