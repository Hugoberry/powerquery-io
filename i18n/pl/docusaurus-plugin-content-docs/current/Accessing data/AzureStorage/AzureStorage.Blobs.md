---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Zwraca tabelę nawigacji zawierającą kontenery znalezione na określonym koncie z magazynu systemu Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Zwraca tabelę nawigacji zawierającą wiersz każdego kontenera znalezionego pod adresem URL konta (<code>account</code>) z magazynu platformy Azure. Każdy wiersz zawiera link do obiektów blob kontenera. Można określić element <code>options</code>, aby kontrolować następujące opcje:    <ul><li><code>BlockSize</code> : Liczba bajt&#243;w do odczytania przed oczekiwaniem na konsumenta danych. Wartość domyślna to 4&#160;MB.</li><li><code>RequestSize</code> : Liczba bajt&#243;w, kt&#243;re mają zostać odczytane w ramach pojedynczego żądania HTTP do serwera. Wartość domyślna to 4&#160;MB.</li><li><code>ConcurrentRequests</code> : Opcja ConcurrentRequests obsługuje szybsze pobieranie danych przez określenie liczby żądań, kt&#243;re mają być wykonywane r&#243;wnolegle, co jednak powoduje większe użycie pamięci. Wymagana ilość pamięci to (ConcurrentRequest \* RequestSize). Wartość domyślna to 16.</li></ul>



## Category
Accessing data
