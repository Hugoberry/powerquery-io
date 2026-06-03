---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Zwraca zawartość określonego pliku z systemu plików Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Zwraca zawartość pliku pod adresem URL, `url`, z systemu plików usługi Azure Data Lake Storage. Można określić element `options`, aby kontrolować następujące opcje:

-   `BlockSize` : Liczba bajtów do odczytania przed oczekiwaniem na konsumenta danych. Wartość domyślna to 4 MB.
-   `RequestSize` : Liczba bajtów, które mają zostać odczytane w ramach pojedynczego żądania HTTP do serwera. Wartość domyślna to 4 MB.
-   `ConcurrentRequests` : Opcja ConcurrentRequests obsługuje szybsze pobieranie danych przez określenie liczby żądań, które mają być wykonywane równolegle, co jednak powoduje większe użycie pamięci. Wymagana ilość pamięci to (ConcurrentRequest \* RequestSize). Wartość domyślna to 16.



## Category
Accessing data
