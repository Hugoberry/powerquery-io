---
title: Expression.Identifier
---

# Expression.Identifier


Zwraca reprezentację kodu źródłowego M identyfikatora.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Zwraca reprezentację kodu źródłowego M identyfikatora <code>name</code>.


## Examples

### Example #1 
Uzyskaj reprezentację kodu źródłowego M identyfikatora.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Uzyskaj reprezentację kodu źródłowego M identyfikatora zawierającego spację.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
