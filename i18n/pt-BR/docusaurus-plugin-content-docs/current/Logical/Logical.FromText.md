---
title: Logical.FromText
---

# Logical.FromText


Cria um valor lógico a partir dos valores de texto &#34;true&#34; e &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Cria um valor lógico a partir do valor de texto <code>text</code>, "true" ou "false". Se <code>text</code> contiver uma cadeia de caracteres diferente, uma exceção será lançada. O valor de texto <code>text</code> não diferencia maiúsculas de minúsculas.


## Examples

### Example #1 
Crie um valor lógico a partir da cadeia de caracteres de texto &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Crie um valor lógico a partir da cadeia de caracteres de texto &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
