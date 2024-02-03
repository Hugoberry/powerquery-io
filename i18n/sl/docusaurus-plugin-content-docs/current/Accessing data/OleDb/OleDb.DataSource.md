---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Vrne tabelo s tabelami in pogledi SQL iz vira podatkov OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Vrne tabelo s tabelami in pogledi SQL iz vira podatkov ODBC, ki je določen v nizu povezave <code>connectionString</code>. <code>connectionString</code> je lahko besedilo ali zapis s pari vrednosti lastnosti. Vrednosti lastnosti so lahko besedilo ali število. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:    <ul><li><code>CreateNavigationProperties</code> : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je &#187;true&#171;).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ki se uporablja za ustvarjanje imen lastnosti krmarjenja.</li><li><code>Query</code> : Izvorna poizvedba SQL, uporabljena za pridobitev podatkov. Če poizvedba pridobi več naborov rezultatov, bo vrnjen samo prvi nabor.</li><li><code>HierarchicalNavigation</code> : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je &#187;true&#171;).</li><li><code>ConnectionTimeout</code> : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.</li><li><code>CommandTimeout</code> : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Logična vrednost (true/false), ki določa, ali je treba za preverjanje pristnosti sistema Windows ustvariti možnosti niza povezave, ki so združljive s strežnikom SQL Server. Privzeta vrednost je &#187;true&#171;.</li></ul>    Parameter zapisa je na primer določen kot [možnost1 = vrednost1, možnost2 = vrednost2 ...] ali [Query = "select ..."].



## Category
Accessing data
