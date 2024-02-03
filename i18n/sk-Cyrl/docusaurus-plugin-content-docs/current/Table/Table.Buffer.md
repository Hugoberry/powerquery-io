---
title: Table.Buffer
---

# Table.Buffer


## Description

Uloží tabuľku do medzipamäte, pričom ju izoluje od externých zmien počas hodnotenia.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Uloží tabuľku do medzipamäte, pričom ju izoluje od externých zmien počas hodnotenia.Uloženie je medzipamäte je plytké. Vynúti vyhodnotenie všetkých skalárnych hodnôt buniek, ale ponechá neskalárne hodnoty (záznamy, zoznamy, tabuľky atď.) tak, ako sú.    <br />    <br />    Upozorňujeme, že použitie tieto funkcie môže alebo nemusí mať za následok rýchlejšie spúšťanie dotazov. V niektorých prípadoch môžu vaše dotazy bežať pomalšie z dôvodu zvýšenia     nákladov na čítanie všetkých údajov a ich ukladanie do pamäte a tiež z dôvodu, že ukladanie do medzipamäte zabraňuje následnému posúvaniu. Ak sa údaje nemusia    ukladať do medzipamäte, ale chcete iba zabrániť následnému posúvaniu, použite namiesto toho <code>Table.StopFolding</code>.


## Examples

### Example #1 
Načíta všetky riadky tabuľky SQL do pamäte, aby žiadne následné operácie nemohli dotazovať SQL server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
