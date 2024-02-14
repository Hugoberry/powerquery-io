---
title: Expression.Identifier
---

# Expression.Identifier


Returnerer M-kildekoderepræsentationen for en identifikator.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Returnerer M-kildekoderepræsentationen for en identifikator <code>name</code>.


## Examples

### Example #1 
Download M-kildekoderepræsentationen af en identifikator.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Download M-kildekoderepræsentationen af en identifikator, der indeholder et mellemrum.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
