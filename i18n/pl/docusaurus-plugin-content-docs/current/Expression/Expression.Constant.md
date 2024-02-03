---
title: Expression.Constant
---

# Expression.Constant


## Description

Zwraca reprezentację kodu źródłowego M wartości stałej.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Zwraca reprezentację kodu źródłowego M wartości stałej.


## Examples

### Example #1 
Uzyskaj reprezentację kodu źródłowego M wartości liczbowej.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Uzyskaj reprezentację kodu źródłowego M wartości daty.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Uzyskaj reprezentację kodu źródłowego M wartości tekstowej.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
