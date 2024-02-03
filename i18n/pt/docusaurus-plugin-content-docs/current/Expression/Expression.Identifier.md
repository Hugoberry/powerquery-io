---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Returns the M source code representation of an identifier.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Returns the M source code representation of an identifier <code>name</code>.


## Examples

### Example #1 
Get the M source code representation of an identifier.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Get the M source code representation of an identifier that contains a space.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
