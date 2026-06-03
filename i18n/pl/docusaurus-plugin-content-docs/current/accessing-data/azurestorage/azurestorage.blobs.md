---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Zwraca tabelę nawigacji zawierającą kontenery znalezione na określonym koncie z magazynu systemu Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę nawigacji zawierającą wiersz każdego kontenera znalezionego pod adresem URL konta (`account`) z magazynu platformy Azure. Każdy wiersz zawiera link do obiektów blob kontenera. Można określić element `options`, aby kontrolować następujące opcje:

-   `BlockSize` : Liczba bajtów do odczytania przed oczekiwaniem na konsumenta danych. Wartość domyślna to 4 MB.
-   `RequestSize` : Liczba bajtów, które mają zostać odczytane w ramach pojedynczego żądania HTTP do serwera. Wartość domyślna to 4 MB.
-   `ConcurrentRequests` : Opcja ConcurrentRequests obsługuje szybsze pobieranie danych przez określenie liczby żądań, które mają być wykonywane równolegle, co jednak powoduje większe użycie pamięci. Wymagana ilość pamięci to (ConcurrentRequest \* RequestSize). Wartość domyślna to 16.



## Category
Accessing data
