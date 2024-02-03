---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Vráti zobrazenie zdrojového kódu M identifikátora.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Vráti zobrazenie zdrojového kódu M identifikátora <code>name</code>.


## Examples

### Example #1 
Získa zobrazenie zdrojového kódu M identifikátora.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Získa zobrazenie zdrojového kódu M identifikátora, ktorý obsahuje medzeru.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
