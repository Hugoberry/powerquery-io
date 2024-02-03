---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

Ta funkcja umożliwia wywołanie dowolnego z punktów końcowych „Lists” dostępnego w interfejsie API SparkPost w wersji 1. W przypadku wywoływania interfejsu API SparkPost przy użyciu tej funkcji należy pamiętać, że interfejs API SparkPost ma ścisły limit szybkości interfejsu API. Jeśli z serwera SparkPost jest zwracany kod stanu 429, oznacza to, że osiągnięto limit szybkości i trzeba chwilę poczekać przed wykonaniem kolejnych wywołań.


## Examples

### Example #1 
Zwraca tabelę z jedną kolumną zawierającą dane z jednego z punktów końcowych „Lists” interfejsu API SparkPost w wersji 1 (szczegóły można znaleźć w dokumentacji łącznika SparkPost).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



