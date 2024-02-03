---
title: Logical.FromText
---

# Logical.FromText


## Description

Crea un valor lògic a partir dels valors de text &#34;true&#34; i &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Crea un valor lògic a partir del valor de text <code>text</code>, "true" o "false". Si <code>text</code> conté una cadena diferent, es produeix una excepció. El valor de text <code>text</code> distingeix entre majúscules i minúscules.


## Examples

### Example #1 
Crea un valor lògic a partir de la cadena de text &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Crea un valor lògic a partir de la cadena de text &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
