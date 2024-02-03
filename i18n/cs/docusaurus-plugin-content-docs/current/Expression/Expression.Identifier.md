---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Vrátí reprezentaci zdrojového kódu M identifikátoru.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Vrátí reprezentaci zdrojového kódu M identifikátoru <code>name</code>.


## Examples

### Example #1 
Získá reprezentaci zdrojového kódu M identifikátoru.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Získá reprezentaci zdrojového kódu M identifikátoru, který obsahuje mezeru.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
