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

Valuta <code>query</code> su <code>target</code> usando i parametri specificati in <code>parameters</code> e le opzioni specificate in <code>options</code>.<br />L'output della query è definito da <code>target</code>.<br /><code>target</code> fornisce il contesto per l'operazione descritta da <code>query</code>.<br /><code>query</code> descrive la query da eseguire su <code>target</code>. <code>query</code> viene espresso in modo specifico per <code>target</code>, ad esempio in un'istruzione T-SQL.<br />Il valore facoltativo <code>parameters</code> può contenere un elenco o un record, a seconda dei casi, per fornire i valori dei parametri previsti da <code>query</code>.<br />Il record facoltativo <code>options</code> può contenere opzioni che influiscono sul comportamento della valutazione di <code>query</code> su <code>target</code>. Queste opzioni sono specifiche di <code>target</code>.<br />



## Category
Values
