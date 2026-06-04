---
title: Expression.Identifier
---

# Expression.Identifier


Atgriež identifikatora M pirmkoda atveidojumu.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Atgriež identifikatora `name` M pirmkoda atveidojumu.


## Examples

### Example #1
Iegūstiet identifikatora M pirmkoda atveidojumu.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
Iegūstiet identifikatora ar atstarpi M pirmkoda atveidojumu.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
