---
title: Logical.FromText
---

# Logical.FromText


## Description

Cria um valor lógico a partir dos valores de texto &#34;true&#34; e &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Cria um valor lógico a partir do valor de texto <code>text</code>, "true" ou "false". Se <code>text</code> contiver uma cadeia diferente, é emitida uma exceção. O valor de texto <code>text</code> não é sensível às maiúsculas e minúsculas.


## Examples

### Example #1 
Criar um valor lógico a partir da cadeia de texto &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Criar um valor lógico a partir da cadeia de texto &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
