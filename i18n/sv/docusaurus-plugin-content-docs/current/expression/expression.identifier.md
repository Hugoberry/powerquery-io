---
title: Expression.Identifier
---

# Expression.Identifier


Returnerar M-källkodsrepresentationen för en identifierare.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Returnerar M-källkodsrepresentationen för en identifierare <code>name</code>.


## Examples

### Example #1 
Hämta M-källkodsrepresentationen för en identifierare.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Hämta M-källkodsrepresentationen för en identifierare som innehåller ett blanksteg.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
