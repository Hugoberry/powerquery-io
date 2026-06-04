---
title: Expression.Identifier
---

# Expression.Identifier


Returnează reprezentarea codului sursă M a unui identificator.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Returnează reprezentarea codului sursă M a unui identificator `name`.


## Examples

### Example #1
Obțineți reprezentarea codului sursă M pentru un identificator.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
Obțineți reprezentarea codului sursă M pentru un identificator care conține un spațiu.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
