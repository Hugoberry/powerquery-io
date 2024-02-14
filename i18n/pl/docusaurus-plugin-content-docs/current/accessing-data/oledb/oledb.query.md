---
title: OleDb.Query
---

# OleDb.Query


Zwraca wynik uruchomienia zapytania natywnego dla źródła danych OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Zwraca wynik uruchomienia elementu <code>query</code> za pomocą parametrów połączenia <code>connectionString</code> przy użyciu bazy danych OLE DB. Element <code>connectionString</code> może mieć wartość tekstową lub być rekordem par właściwości i wartości. Wartości właściwości mogą być tekstem lub liczbami. Aby określić dodatkowe właściwości, można podać opcjonalny parametr rekordu <code>options</code>. Rekord może zawierać następujące pola:    <ul><li><code>ConnectionTimeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem pr&#243;by nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.</li><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Wartość logiczna (true/false) określająca, czy mają zostać utworzone opcje parametr&#243;w połączenia zgodne z programem SQL Server na potrzeby uwierzytelniania systemu Windows. Wartość domyślna to true.</li></ul>



## Category
Accessing data
