---
title: Value.NativeQuery
---

# Value.NativeQuery


Oblicza zapytanie dla celu.


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

Ocenia element `query` w stosunku do elementu `target` przy użyciu parametrów określonych w elemencie `parameters` i opcji określonych w elemencie `options`.

Wyjście zapytania jest zdefiniowane przez element `target`.

Element `target` udostępnia kontekst dla operacji opisanej przez element `query`.

Element `query` opisuje zapytanie do wykonania w stosunku do elementu `target`. Element `query` jest wyrażony w sposób specyficzny dla elementu `target` (np. jako instrukcja T-SQL).

Opcjonalna wartość elementu `parameters` może zawierać listę lub rekord właściwy do udostępnienia wartości parametrów oczekiwanych przez element `query`.

Opcjonalny rekord elementu `options` może zawierać opcje wpływające na zachowanie wykonywania elementu `query` w stosunku do elementu `target`. Te opcje są specyficzne dla elementu `target`.



## Category
Values
