---
title: Expression.Identifier
---

# Expression.Identifier


Vrne predstavitev izvorne kode M identifikatorja.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Vrne predstavitev izvorne kode M identifikatorja `name`.


## Examples

### Example #1
Pridobite predstavitev izvorne kode M identifikatorja.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
Pridobite predstavitev izvorne kode M identifikatorja, ki vsebuje presledek.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
