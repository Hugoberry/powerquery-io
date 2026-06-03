---
title: Logical.FromText
---

# Logical.FromText


Crée une valeur logique à partir des valeurs de texte "true" et "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Crée une valeur logique à partir de la valeur de texte `text`, soit "true", soit "false". Si `text` contient une chaîne différente, une erreur est levée. La valeur de texte `text` respecte la casse.


## Examples

### Example #1
Crée une valeur logique à partir de la chaîne de texte "true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Crée une valeur logique à partir de la chaîne de texte "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
