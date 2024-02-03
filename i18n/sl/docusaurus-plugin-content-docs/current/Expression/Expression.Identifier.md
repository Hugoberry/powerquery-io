---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Vrne predstavitev izvorne kode M identifikatorja.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Vrne predstavitev izvorne kode M identifikatorja <code>name</code>.


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
