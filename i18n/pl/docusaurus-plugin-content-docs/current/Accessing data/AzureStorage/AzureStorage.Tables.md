---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Zwraca tabelę nawigacyjną zawierającą tabele znalezione w określonym koncie z magazynu systemu Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Zwraca tabelę nawigacyjną zawierającą wiersz dla każdej tabeli znalezionej pod adresem URL konta, <code>account</code>, z magazynu usługi Azure Storage. Każdy wiersz zawiera link do tabeli platformy Azure. Można podać opcjonalny parametr rekordu, <code>options</code>, w celu określenia dodatkowych właściwości. Rekord może zawierać następujące pola :    <ul><li><code>Timeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem żądania kierowanego do serwera. Wartość domyślna jest zależna od źr&#243;dła.</li></ul>



## Category
Accessing data
