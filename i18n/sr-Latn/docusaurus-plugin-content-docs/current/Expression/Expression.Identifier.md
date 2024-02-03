---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Vraća reprezentaciju M izvornog koda identifikatora.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Vraća reprezentaciju M izvornog koda identifikatora <code>name</code>.


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
