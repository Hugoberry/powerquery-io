---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Importuj dane z bazy danych Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Zwraca tabelę zawierającą tabele na  <code>serwerze</code> klastra usługi Amazon Redshift  w bazie danych <code>database</code>.  Opcjonalny parametr rekordu, <code>options</code>, można określić, aby kontrolować następujące opcje: <ul><li><code> Nazwa dostawcy</code>: wartość tekstowa, która ma być używana jako nazwa dostawcy dla połączenia. Jest to używane w przypadku korzystania z uwierzytelniania firmy Microsoft.</li><li><code>Rozmiar partii</code>: liczba wierszy pobranych w jednym wywołaniu do serwera.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



