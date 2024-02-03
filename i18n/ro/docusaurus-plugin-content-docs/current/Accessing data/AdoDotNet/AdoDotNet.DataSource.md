---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Returnează colecția de scheme pentru o sursă de date ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Returnează colecția de schemă pentru sursa de date ADO.NET cu numele de furnizor <code>providerName</code> și cu șirul de conexiune <code>connectionString</code>. <code>connectionString</code> poate fi text sau o înregistrare cu perechi proprietate-valoare. Valorile de proprietăți pot fi sub formă de text sau numere. Poate fi furnizat un parametru de înregistrare opțional, <code>options</code>, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>CommandTimeout</code> : O durată care controlează c&#226;t timp poate rula interogarea de partea serverului &#238;nainte să fie anulată. Valoarea implicită este de zece minute.</li><li><code>SqlCompatibleWindowsAuth</code> : O valoare logică (true/false) ce determină dacă se produc opțiuni șir de conexiune compatibile cu SQL Server pentru autentificarea Windows. Valoarea implicită este true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
