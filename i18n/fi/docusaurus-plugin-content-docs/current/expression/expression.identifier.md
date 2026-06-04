---
title: Expression.Identifier
---

# Expression.Identifier


Palauttaa tunnisteen M-lähdekoodiesityksen.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Palauttaa tunnisteen `name` M-lähdekoodiesityksen.


## Examples

### Example #1
Hae tunnuksen M-lähdekoodiesitys.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
Hae välilyönnin sisältävän tunnisteen M-lähdekoodiesitys.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
