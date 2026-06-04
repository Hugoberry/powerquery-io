---
title: Logical.ToText
---

# Logical.ToText


Логикалық мән көрсетілген болса, "true" немесе "false" мәтінін қайтарады.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

`logicalValue` логикалық мәнінен `true` немесе `false` мәтіндік мәнін жасайды. Егер `logicalValue` логикалық мән болмаса, қате тудырады.


## Examples

### Example #1
`true` логикалық мәнінен мәтіндік мәнді жасау.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
