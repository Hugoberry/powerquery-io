---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Vrne tabelo tabel in pogledov SQL iz vira podatkov ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Vrne tabelo tabel in pogledov SQL iz vira podatkov ODBC, ki je določen v nizu povezave <code>connectionString</code>. <code>connectionString</code> je lahko besedilo ali zapis s pari vrednosti lastnosti. Vrednosti lastnosti so lahko besedilo ali število. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:    <ul><li><code>CreateNavigationProperties</code> : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je &#187;true&#171;).</li><li><code>HierarchicalNavigation</code> : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je &#187;false&#171;).</li><li><code>ConnectionTimeout</code> : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je 15 sekund.</li><li><code>CommandTimeout</code> : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Logična vrednost (true/false), ki določa, ali je treba za preverjanje pristnosti sistema Windows ustvariti možnosti niza povezave, ki so združljive s strežnikom SQL Server. Privzeta vrednost je &#187;true&#171;.</li></ul>


## Examples

### Example #1 
Pridobite tabele in poglede SQL iz navedenega niza povezave.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
