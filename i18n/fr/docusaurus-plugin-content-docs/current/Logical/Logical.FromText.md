---
title: Logical.FromText
---

# Logical.FromText


## Description

Crée une valeur logique à partir des valeurs de texte &#34; true &#34; et &#34; false &#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Crée une valeur logique à partir de la valeur de texte <code>text</code>, soit " true ", soit " false ". Si <code>text</code> contient une chaîne différente, une exception est levée. La valeur de texte <code>text</code> respecte la casse.


## Examples

### Example #1 
Crée une valeur logique à partir de la chaîne de texte &#34; true &#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Crée une valeur logique à partir de la chaîne de texte &#34; a &#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
