---
title: Odbc.Query
---

# Odbc.Query


## Description

Returnează rezultatul rulării unei interogări native pe o bază de date ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Returnează rezultatul rulării <code>query</code> cu șirul de conexiune <code>connectionString</code> folosind ODBC. <code>connectionString</code> poate fi text sau o înregistrare cu perechi proprietate-valoare. Valorile de proprietăți pot fi sub formă de text sau numere. Poate fi furnizat un parametru de înregistrare opțional, <code>options</code>, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>ConnectionTimeout</code> : O durată care controlează c&#226;t timp se așteaptă &#238;nainte de a abandona o &#238;ncercare de a face o conexiune la server. Valoarea implicită este de 15 secunde.</li><li><code>CommandTimeout</code> : O durată care controlează c&#226;t timp poate rula interogarea de partea serverului &#238;nainte să fie anulată. Valoarea implicită este de zece minute.</li><li><code>SqlCompatibleWindowsAuth</code> : O valoare logică (true/false) ce determină dacă se produc opțiuni șir de conexiune compatibile cu SQL Server pentru autentificarea Windows. Valoarea implicită este true.</li></ul>


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
