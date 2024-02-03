---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Returnează un tabel de vizualizări și tabele SQL din sursa de date ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Returnează un tabel de vizualizări și tabele SQL din sursa de date ODBC specificată de șirul de conexiune <code>connectionString</code>. <code>connectionString</code> poate fi text sau o înregistrare cu perechi proprietate-valoare. Valorile de proprietăți pot fi sub formă de text sau numere. Poate fi furnizat un parametru de înregistrare opțional, <code>options</code>, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>CreateNavigationProperties</code> : O valoare logică (true/false) care setează dacă se generează proprietăți de navigare pentru valorile returnate (valoarea implicită este true).</li><li><code>HierarchicalNavigation</code> : O valoare logică (true/false) care setează dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este false).</li><li><code>ConnectionTimeout</code> : O durată care controlează c&#226;t timp se așteaptă &#238;nainte de a abandona o &#238;ncercare de a face o conexiune la server. Valoarea implicită este de 15 secunde.</li><li><code>CommandTimeout</code> : O durată care controlează c&#226;t timp poate rula interogarea de partea serverului &#238;nainte să fie anulată. Valoarea implicită este de zece minute.</li><li><code>SqlCompatibleWindowsAuth</code> : O valoare logică (true/false) ce determină dacă se produc opțiuni șir de conexiune compatibile cu SQL Server pentru autentificarea Windows. Valoarea implicită este true.</li></ul>


## Examples

### Example #1 
Returnați vizualizările și tabelele SQL din șirul de conexiune furnizat.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
