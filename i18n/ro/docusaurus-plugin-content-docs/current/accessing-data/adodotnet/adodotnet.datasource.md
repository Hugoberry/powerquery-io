---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Returnează colecția de scheme pentru o sursă de date ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returnează colecția de schemă pentru sursa de date ADO.NET cu numele de furnizor `providerName` și cu șirul de conexiune `connectionString`. `connectionString` poate fi text sau o înregistrare cu perechi proprietate-valoare. Valorile de proprietăți pot fi sub formă de text sau numere. Poate fi furnizat un parametru de înregistrare opțional, `options`, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `CommandTimeout` : O durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată. Valoarea implicită este de zece minute.
-   `SqlCompatibleWindowsAuth` : O valoare logică (true/false) ce determină dacă se produc opțiuni șir de conexiune compatibile cu SQL Server pentru autentificarea Windows. Valoarea implicită este true.
-   `TypeMap`



## Category
Accessing data
