---
title: Expression.Identifier
---

# Expression.Identifier


Gibt die M-Quellcodedarstellung eines Bezeichners zurück.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Gibt die M-Quellcodedarstellung eines Bezeichners "<code>name</code>" zurück.


## Examples

### Example #1 
Hiermit wird die M-Quellcodedarstellung eines Bezeichners abgerufen.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Hiermit wird die M-Quellcodedarstellung eines Bezeichners abgerufen, der ein Leerzeichen enthält.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
