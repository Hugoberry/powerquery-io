---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

Returnează rezultatul rulării unei interogări native pe o bază de date ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Returnează rezultatul rulării <code>query</code> cu șirul de conexiune <code>connectionString</code> folosind furnizorul ADO.NET <code>providerName</code>. <code>connectionString</code> poate fi text sau o înregistrare cu perechi proprietate-valoare. Valorile de proprietăți pot fi sub formă de text sau numere. Poate fi furnizat un parametru de înregistrare opțional, <code>options</code>, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>CommandTimeout</code> : O durată care controlează c&#226;t timp poate rula interogarea de partea serverului &#238;nainte să fie anulată. Valoarea implicită este de zece minute.</li><li><code>SqlCompatibleWindowsAuth</code> : O valoare logică (true/false) ce determină dacă se produc opțiuni șir de conexiune compatibile cu SQL Server pentru autentificarea Windows. Valoarea implicită este true.</li></ul>



## Category
Accessing data
