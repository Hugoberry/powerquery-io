---
title: Parquet.Document
---

# Parquet.Document


Zwraca zawartość dokumentu Parquet jako tabelę.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Zwraca zawartość dokumentu Parquet jako tabelę. Dostępne opcje to:    <ul>    <li> <code>TypeMapping</code>: wartość tekstowa kontrolująca domyślne mapowanie typów podczas odczytywania i zapisywania plików. Wartością domyślną jest null i próbuje zachować w stopniu wierności na tyle odpowiadającym oryginalnemu typu jak to jest możliwe. Wartość „Sql” spowoduje uzyskanie wyników najbardziej zgodnych z plikiem Sql Server.</li>    </ul>



## Category
Uzyskiwanie dostępu do danych
