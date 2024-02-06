---
title: Expression.Identifier
---

# Expression.Identifier


Restituisce la rappresentazione del codice sorgente M di un identificatore.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Restituisce la rappresentazione del codice sorgente M di un identificatore <code>name</code>.


## Examples

### Example #1 
Ottiene la rappresentazione del codice sorgente M di un identificatore.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Ottiene la rappresentazione del codice sorgente M di un identificatore che contiene uno spazio.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
