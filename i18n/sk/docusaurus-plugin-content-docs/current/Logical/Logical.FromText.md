---
title: Logical.FromText
---

# Logical.FromText


## Description

Vytvorí logickú hodnotu z textových hodnôt True a False.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Vytvorí logickú hodnotu z textovej hodnoty <code>text</code>, a to buď True, alebo False. Ak funkcia <code>text</code> obsahuje iný reťazec, dôjde k výnimke. Textová hodnota <code>text</code> nerozlišuje malé a veľké písmená.


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
Vytvorte logickú hodnotu z textového reťazca &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
