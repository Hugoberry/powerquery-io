---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Zwraca tabelę nawigacyjną zawierającą dokumenty znalezione w określonym kontenerze i jego podfolderach w usłudze Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę nawigacyjną zawierającą dokumenty znalezione w określonym kontenerze i jego podfolderach pod adresem URL konta, `endpoint`, w systemie plików usługi Azure Data Lake Storage. Można określić element `options`, aby kontrolować następujące opcje:

-   `BlockSize` : Liczba bajtów do odczytania przed oczekiwaniem na konsumenta danych. Wartość domyślna to 4 MB.
-   `RequestSize` : Liczba bajtów, które mają zostać odczytane w ramach pojedynczego żądania HTTP do serwera. Wartość domyślna to 4 MB.
-   `ConcurrentRequests` : Opcja ConcurrentRequests obsługuje szybsze pobieranie danych przez określenie liczby żądań, które mają być wykonywane równolegle, co jednak powoduje większe użycie pamięci. Wymagana ilość pamięci to (ConcurrentRequest \* RequestSize). Wartość domyślna to 16.
-   `HierarchicalNavigation` : Wartość logiczna (prawda/fałsz) określająca, czy pliki są zwracane w widoku katalogu podobnym do drzewa, czy na liście niezhierarchizowanej. Wartość domyślna to fałsz.



## Category
Accessing data
