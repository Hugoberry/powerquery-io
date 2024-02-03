---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Hiermee wordt de M-broncodeweergave van een id geretourneerd.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Hiermee wordt de M-broncodeweergave van de id <code>name</code> geretourneerd.


## Examples

### Example #1 
De M-broncodeweergave van een id ophalen.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
De M-broncodeweergave ophalen van een id die een spatie bevat.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
