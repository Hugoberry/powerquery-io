---
title: Logical.FromText
---

# Logical.FromText


## Description

Vytvoří logickou hodnotu z textových hodnot True a False.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Vytvoří logickou hodnotu z textové hodnoty <code>text</code> – buď True, nebo False. Pokud hodnota <code>text</code> obsahuje jiný řetězec, je vyvolána výjimka. U textové hodnoty <code>text</code> se rozlišují velká a malá písmena.


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
