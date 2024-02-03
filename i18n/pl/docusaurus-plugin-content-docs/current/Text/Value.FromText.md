---
title: Value.FromText
---

# Value.FromText


## Description

Tworzy silnie typizowaną wartość na podstawie reprezentacji tekstowej.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Dekoduje wartość z reprezentacji tekstowej <code>text</code> i interpretuje ją jako wartość odpowiedniego typu.    Funkcja <code>Value.FromText</code> przyjmuje wartość tekstową i zwraca wartość liczbową, logiczną, równą null, daty/godziny, czasu trwania lub tekstową. Pusta wartość tekstowa jest interpretowana jako wartość null.    Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).



## Category
Text.Conversions from and to text
