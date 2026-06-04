---
title: Expression.Identifier
---

# Expression.Identifier


Vraća reprezentaciju M izvornog koda identifikatora.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Vraća reprezentaciju M izvornog koda identifikatora `name`.


## Examples

### Example #1
Preuzmite reprezentaciju M izvornog koda identifikatora.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
Preuzmite reprezentaciju M izvornog koda identifikatora koji sadrži razmak.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
