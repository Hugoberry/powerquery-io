---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importuj dane z bazy danych Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą tabele na `serwerze` klastra usługi Amazon Redshift w bazie danych `baza danych`. Opcjonalny parametr rekordu, `opcje`, może być określony w celu kontrolowania następujących opcji:

-   `Nazwa dostawcy`: wartość tekstowa używana jako nazwa dostawcy dla połączenia. Jest to używane w przypadku korzystania z uwierzytelniania firmy Microsoft.
-   `Rozmiar partii`: liczba wierszy pobranych w ramach jednego wywołania do serwera.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



