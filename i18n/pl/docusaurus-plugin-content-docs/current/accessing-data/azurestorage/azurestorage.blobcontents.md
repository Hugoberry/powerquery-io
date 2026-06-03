---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Zwraca zawartość określonego obiektu blob z magazynu platformy Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Zwraca zawartość obiektu blob pod adresem URL, `url`, z magazynu platformy Azure. Można określić element `options`, aby kontrolować następujące opcje:

-   `BlockSize` : Liczba bajtów do odczytania przed oczekiwaniem na konsumenta danych. Wartość domyślna to 4 MB.
-   `RequestSize` : Liczba bajtów, które mają zostać odczytane w ramach pojedynczego żądania HTTP do serwera. Wartość domyślna to 4 MB.
-   `ConcurrentRequests` : Opcja ConcurrentRequests obsługuje szybsze pobieranie danych przez określenie liczby żądań, które mają być wykonywane równolegle, co jednak powoduje większe użycie pamięci. Wymagana ilość pamięci to (ConcurrentRequest \* RequestSize). Wartość domyślna to 16.



## Category
Accessing data
