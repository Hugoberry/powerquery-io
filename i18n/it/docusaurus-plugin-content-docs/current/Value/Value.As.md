---
title: Value.As
---

# Value.As


Restituisce il valore se è compatibile con il tipo specificato.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Remarks

Restituisce il valore se compatibile con il tipo specificato. Equivale all'operatore "is" in M, con l'eccezione che può accettare riferimenti al tipo di identificatore, ad esempio Number.Type.


## Examples

### Example #1 
Esegue il cast di un numero a un numero.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Tentativo di eseguire il cast di un valore di testo a un numero.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
