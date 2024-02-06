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

Zwraca zawartość obiektu blob pod adresem URL, <code>url</code>, z magazynu platformy Azure. Można określić element <code>options</code>, aby kontrolować następujące opcje:    <ul><li><code>BlockSize</code> : Liczba bajt&#243;w do odczytania przed oczekiwaniem na konsumenta danych. Wartość domyślna to 4&#160;MB.</li><li><code>RequestSize</code> : Liczba bajt&#243;w, kt&#243;re mają zostać odczytane w ramach pojedynczego żądania HTTP do serwera. Wartość domyślna to 4&#160;MB.</li><li><code>ConcurrentRequests</code> : Opcja ConcurrentRequests obsługuje szybsze pobieranie danych przez określenie liczby żądań, kt&#243;re mają być wykonywane r&#243;wnolegle, co jednak powoduje większe użycie pamięci. Wymagana ilość pamięci to (ConcurrentRequest \* RequestSize). Wartość domyślna to 16.</li></ul>



## Category
Accessing data
