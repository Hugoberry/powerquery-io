---
title: Logical.FromText
---

# Logical.FromText


Vytvoří logickou hodnotu z textových hodnot True a False.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Vytvoří logickou hodnotu z textové hodnoty `text` – buď True, nebo False. Pokud `text` obsahuje jiný řetězec, vyvolá se chyba. U textové hodnoty `text` se rozlišují velká a malá písmena.


## Examples

### Example #1
Vytvoří logickou hodnotu z textového řetězce True.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Vytvoří logickou hodnotu z textového řetězce a.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
