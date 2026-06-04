---
title: Expression.Identifier
---

# Expression.Identifier


Mengembalikan perwakilan kod sumber M bagi pengecam.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Mengembalikan perwakilan kod sumber M bagi pengecam `name`.


## Examples

### Example #1
Dapatkan perwakilan kod sumber M bagi pengecam.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
Dapatkan perwakilan kod sumber M bagi pengecam yang mengandungi ruang.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
