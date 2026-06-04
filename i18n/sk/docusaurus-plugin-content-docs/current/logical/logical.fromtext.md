---
title: Logical.FromText
---

# Logical.FromText


Vytvorí logickú hodnotu z textových hodnôt True a False.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Vytvorí logickú hodnotu z textovej hodnoty `text`, a to buď True, alebo False. Ak `text` obsahuje iný reťazec, vyvolá sa chyba. Textová hodnota `text` nerozlišuje malé a veľké písmená.


## Examples

### Example #1
Vytvorte logickú hodnotu z textového reťazca True.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Vytvorte logickú hodnotu z textového reťazca "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
