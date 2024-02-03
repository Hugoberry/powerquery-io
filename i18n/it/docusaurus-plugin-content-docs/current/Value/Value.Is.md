---
title: Value.Is
---

# Value.Is


## Description

Determina se un valore è compatibile con il tipo specificato.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Determina se un valore è compatibile con il tipo specificato. Equivale all'operatore "is" in M, con l'eccezione che può accettare riferimenti al tipo di identificatore, ad esempio Number.Type.


## Examples

### Example #1 
Confrontare due modi per determinare se un numero è compatibile con il type number.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
