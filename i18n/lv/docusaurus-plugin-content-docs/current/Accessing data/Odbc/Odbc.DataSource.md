---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Atgriež no ODBC datu avota tabulu ar SQL tabulām un skatiem. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Tiek atgriezta tabula ar SQL tabulām un skatiem no ODBC datu avota, ko norādīja savienojuma virkne <code>connectionString</code>. <code>connectionString</code> var būt teksts vai rekvizīta vērtību pāru ieraksts. Rekvizīta vērtības var būt teksts vai skaitlis. Lai norādītu papildu rekvizītus, var tikt norādīts ieraksta izvēles parametrs <code>options</code>. Ierakstā var būt šādi lauki:    <ul><li><code>CreateNavigationProperties</code> : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).</li><li><code>HierarchicalNavigation</code> : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).</li><li><code>ConnectionTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir 15&#160;sekundes.</li><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.</li><li><code>SqlCompatibleWindowsAuth</code> : Loģiskais operators (True/False), kas nosaka, vai izveidot ar SQL&#160;Server saderīgas savienojuma virknes opcijas, ko izmantot Windows autentifikācijas procesā. Noklusējuma vērtība ir True.</li></ul>


## Examples

### Example #1 
Atgrieziet SQL tabulas un skatus no nodrošinātās savienojuma virknes.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
