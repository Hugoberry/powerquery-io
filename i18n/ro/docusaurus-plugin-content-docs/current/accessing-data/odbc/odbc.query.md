---
title: Odbc.Query
---

# Odbc.Query


Returnează rezultatul rulării unei interogări native pe o bază de date ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Returnează rezultatul rulării `query` cu șirul de conexiune `connectionString` folosind ODBC. `connectionString` poate fi text sau o înregistrare cu perechi proprietate-valoare. Valorile de proprietăți pot fi sub formă de text sau numere. Poate fi furnizat un parametru de înregistrare opțional, `options`, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `ConnectionTimeout` : O durată care controlează cât timp se așteaptă înainte de a abandona o încercare de a face o conexiune la server. Valoarea implicită este de 15 secunde.
-   `CommandTimeout` : O durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată. Valoarea implicită este de zece minute.
-   `SqlCompatibleWindowsAuth` : O valoare logică (true/false) ce determină dacă se produc opțiuni șir de conexiune compatibile cu SQL Server pentru autentificarea Windows. Valoarea implicită este true.


## Examples

### Example #1
Returnați rezultatul rulării unei interogări simple pe șirul de conexiune furnizat.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
