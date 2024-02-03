---
title: Expression.Constant
---

# Expression.Constant


## Description

Mengembalikan perwakilan kod sumber M bagi nilai malar.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Mengembalikan perwakilan kod sumber M bagi nilai malar.


## Examples

### Example #1 
Dapatkan perwakilan kod sumber M bagi nilai nombor.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Dapatkan perwakilan kod sumber M bagi nilai tarikh.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Dapatkan perwakilan kod sumber M bagi nilai teks.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
