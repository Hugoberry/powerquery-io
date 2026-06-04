---
title: Logical.FromText
---

# Logical.FromText


"true" және "false" мәтіндік мәндерінен логикалық мәнді жасайды.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

`text` мәтіндік мәнінен "true" немесе "false" логикалық мәнін жасайды. Егер `text` басқа жолды қамтыса, қате тудырады. `text` мәтіндік мәні регистрді ескермейді.


## Examples

### Example #1
"true" мәтін жолынан логикалық мәнді жасау.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
"a" мәтін жолынан логикалық мәнді жасау.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
