---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Pateikia identifikatoriaus M šaltinio kodo atvaizdavimą.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Pateikia identifikatoriaus <code>name</code> M šaltinio kodo atvaizdavimą.


## Examples

### Example #1 
Gaukite identifikatoriaus M šaltinio kodo atvaizdavimą.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Gaukite identifikatoriaus, kuriame yra tarpas, M šaltinio kodo atvaizdavimą.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
