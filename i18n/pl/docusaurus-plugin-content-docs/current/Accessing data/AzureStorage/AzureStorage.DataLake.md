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

Zwraca tabelę nawigacyjną zawierającą dokumenty znalezione w określonym kontenerze i jego podfolderach pod adresem URL konta, <code>endpoint</code>, w systemie plików usługi Azure Data Lake Storage. Można określić element <code>options</code>, aby kontrolować następujące opcje:    <ul><li><code>BlockSize</code> : Liczba bajt&#243;w do odczytania przed oczekiwaniem na konsumenta danych. Wartość domyślna to 4&#160;MB.</li><li><code>RequestSize</code> : Liczba bajt&#243;w, kt&#243;re mają zostać odczytane w ramach pojedynczego żądania HTTP do serwera. Wartość domyślna to 4&#160;MB.</li><li><code>ConcurrentRequests</code> : Opcja ConcurrentRequests obsługuje szybsze pobieranie danych przez określenie liczby żądań, kt&#243;re mają być wykonywane r&#243;wnolegle, co jednak powoduje większe użycie pamięci. Wymagana ilość pamięci to (ConcurrentRequest \* RequestSize). Wartość domyślna to 16.</li><li><code>HierarchicalNavigation</code> : Wartość logiczna (prawda/fałsz) określająca, czy pliki są zwracane w widoku katalogu podobnym do drzewa, czy na liście niezhierarchizowanej. Wartość domyślna to fałsz.</li></ul>



## Category
Accessing data
