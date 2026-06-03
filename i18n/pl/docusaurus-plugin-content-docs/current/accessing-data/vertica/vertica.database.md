---
title: Vertica.Database
---

# Vertica.Database


Importuj dane z usługi Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę schematów dostępną na serwerze o nazwie określonej przez parametr `server` w bazie danych o nazwie określonej przez parametr `database`. Można podać opcjonalny parametr rekordu `options`w celu określenia dodatkowych właściwości. Rekord może zawierać następujące pola:

-   `ConnectionTimeout`: Czas trwania decydujący o tym, jak długie ma być oczekiwanie przed zaniechaniem próby nawiązania połączenia z serwerem. Wartość domyślna zależy od sterownika.
-   `CommandTimeout` : Czas trwania decydujący o tym, jak długo zapytanie po stronie serwera może działać, zanim zostanie anulowane. Wartość domyślna zależy od sterownika.


## Examples

### Example #1
Wyświetl listę tabel w usłudze Vertica
```powerquery

```



