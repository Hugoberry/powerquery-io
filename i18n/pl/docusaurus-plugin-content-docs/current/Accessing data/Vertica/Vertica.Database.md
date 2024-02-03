---
title: Vertica.Database
---

# Vertica.Database


## Description

Importuj dane z usługi Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Zwraca tabelę schematów dostępną na serwerze o nazwie określonej przez parametr <code>server</code> w bazie danych o nazwie określonej przez parametr <code>database</code>.Można podać opcjonalny parametr rekordu <code>options</code>w celu określenia dodatkowych właściwości. Rekord może zawierać następujące pola:<ul>    <li><code>ConnectionTimeout</code>: Czas trwania decydujący o tym, jak długie ma być oczekiwanie przed zaniechaniem próby nawiązania połączenia z serwerem. Wartość domyślna zależy od sterownika.</li>    <li><code>CommandTimeout </code>: Czas trwania decydujący o tym, jak długo zapytanie po stronie serwera może działać, zanim zostanie anulowane. Wartość domyślna zależy od sterownika.</li></ul>


## Examples

### Example #1 
Wyświetl listę tabel w usłudze Vertica
```powerquery

```



