---
title: Odbc.Query
---

# Odbc.Query


## Description

Vraća rezultat pokretanja osnovnog upita na ODBC izvoru podataka.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Vraća rezultat pokretanja <code>query</code> sa niskom veze <code>connectionString</code> pomoću interfejsa ODBC. <code>connectionString</code> može biti tekst ili zapis parova vrednosti svojstava. Vrednosti svojstava mogu da budu tekst ili broj. Opcionalni parametar zapisa, <code>options</code>, može da se obezbedi da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:    <ul><li><code>ConnectionTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost je 15 sekundi.</li><li><code>CommandTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.</li><li><code>SqlCompatibleWindowsAuth</code> : Logička vrednost (true/false) koja određuje da li se stvaraju opcije niske veze kompatibilne sa SQL serverom za Windows potvrdu identiteta. Podrazumevana vrednost je true.</li></ul>


## Examples

### Example #1 
Vraćanje rezultata pokretanja jednostavnog upita u odnosu na obezbeđenu nisku veze.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
