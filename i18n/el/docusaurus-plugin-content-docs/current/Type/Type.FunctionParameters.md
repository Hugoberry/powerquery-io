---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Επιστρέφει μια εγγραφή με τιμές πεδίων που έχουν οριστεί με τα ονόματα των παραμέτρων ενός τύπου συνάρτησης και τις τιμές αυτών, οι οποίες έχουν οριστεί με τους αντίστοιχους τύπους τους.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Επιστρέφει μια εγγραφή με τιμές πεδίων που έχουν οριστεί με τα ονόματα των παραμέτρων του στοιχείου <code>type</code> και τις τιμές αυτών, οι οποίες έχουν οριστεί με τους αντίστοιχους τύπους τους.


## Examples

### Example #1 
Εύρεση των τύπων παραμέτρων στη συνάρτηση &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
