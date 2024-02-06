---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Remarks

Pobierz wbudowane tabele uwidaczniane przez łącznik SparkPost z danymi agregowanymi przez określoną przez użytkownika liczbę dni. Podczas odświeżania tych tabel lub wywoływania interfejsu API SparkPost przy użyciu tego łącznika należy pamiętać, że interfejs API SparkPost ma ścisły limit szybkości interfejsu API. Jeśli z serwera SparkPost jest zwracany kod stanu 429, oznacza to, że osiągnięto limit szybkości i trzeba chwilę poczekać przed wykonaniem kolejnych wywołań. W przypadku wybierania wartości parametru liczby dni należy zauważyć, że w interfejsie API są przechowywane dane tylko z 6 miesięcy.


