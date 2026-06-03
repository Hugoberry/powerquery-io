---
title: Value.NativeQuery
---

# Value.NativeQuery


Valuta una query su una destinazione.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

Valuta `query` su `target` usando i parametri specificati in `parameters` e le opzioni specificate in `options`.

L'output della query è definito da `target`.

`target` fornisce il contesto per l'operazione descritta da `query`.

`query` descrive la query da eseguire su `target`. `query` viene espresso in modo specifico per `target`, ad esempio in un'istruzione T-SQL.

Il valore facoltativo `parameters` può contenere un elenco o un record, a seconda dei casi, per fornire i valori dei parametri previsti da `query`.

Il record facoltativo `options` può contenere opzioni che influiscono sul comportamento della valutazione di `query` su `target`. Queste opzioni sono specifiche di `target`.



## Category
Values
