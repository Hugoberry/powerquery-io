---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

Ocenia element <code>query</code> w stosunku do elementu <code>target</code> przy użyciu parametrów określonych w elemencie <code>parameters</code> i opcji określonych w elemencie <code>options</code>.<br />Wyjście zapytania jest zdefiniowane przez element <code>target</code>.<br />Element <code>target</code> udostępnia kontekst dla operacji opisanej przez element <code>query</code>.<br />Element <code>query</code> opisuje zapytanie do wykonania w stosunku do elementu <code>target</code>. Element <code>query</code> jest wyrażony w sposób specyficzny dla elementu <code>target</code> (np. jako instrukcja T-SQL).<br />Opcjonalna wartość elementu <code>parameters</code> może zawierać listę lub rekord właściwy do udostępnienia wartości parametrów oczekiwanych przez element <code>query</code>.<br />Opcjonalny rekord elementu <code>options</code> może zawierać opcje wpływające na zachowanie wykonywania elementu <code>query</code> w stosunku do elementu <code>target</code>. Te opcje są specyficzne dla elementu <code>target</code>.<br />



## Category
Values
