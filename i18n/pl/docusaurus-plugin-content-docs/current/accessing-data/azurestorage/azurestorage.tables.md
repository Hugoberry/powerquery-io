---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Zwraca tabelę nawigacyjną zawierającą tabele znalezione w określonym koncie z magazynu systemu Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę nawigacyjną zawierającą wiersz dla każdej tabeli znalezionej pod adresem URL konta, `account`, z magazynu usługi Azure Storage. Każdy wiersz zawiera link do tabeli platformy Azure. Można podać opcjonalny parametr rekordu, `options`, w celu określenia dodatkowych właściwości. Rekord może zawierać następujące pola:

-   `Timeout` : Czas określający, jak długo oczekiwać przed porzuceniem żądania kierowanego do serwera. Wartość domyślna jest zależna od źródła.



## Category
Accessing data
