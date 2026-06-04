---
title: Table.Buffer
---

# Table.Buffer


Uloží tabuľku do medzipamäte, pričom ju izoluje od externých zmien počas hodnotenia.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Uloží tabuľku do vyrovnávacej pamäte v pamäti, čím ju počas vyhodnocovania izoluje od externých zmien. Ukladanie do vyrovnávacej pamäte je plytké. Vynúti vyhodnotenie všetkých skalárnych hodnôt buniek, ale neskalárne hodnoty (záznamy, zoznamy, tabuľky a podobne) ponechá bez zmeny.

-   `table`: Tabuľka, ktorá sa má uložiť do vyrovnávacej pamäte v pamäti.
-   `options`: (Voliteľné) Možno použiť nasledujúce hodnoty záznamu možností:
    -   `BufferMode`: Režim vyrovnávacej pamäte, ktorý opisuje typ vykonávaného ukladania do vyrovnávacej pamäte. Táto možnosť môže byť buď `BufferMode.Eager`, alebo `BufferMode.Delayed`.

Použitie tejto funkcie môže, ale nemusí zrýchliť spúšťanie vašich dotazov. V niektorých prípadoch to môže spomaliť spracovanie vašich dotazov kvôli dodatočným na načítanie všetkých údajov a ich uloženie do pamäte, ako aj z dôvodu, že ukladanie do vyrovnávacej pamäte zabraňuje následnému skladaniu. Ak údaje nemusia byť uložené vo vyrovnávacej pamäti ale chcete len zabrániť následnému skladaniu, použite namiesto toho `Table.StopFolding`.


## Examples

### Example #1
Načíta všetky riadky tabuľky SQL do pamäte, aby žiadne následné operácie už nemohli dotazovať SQL server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
