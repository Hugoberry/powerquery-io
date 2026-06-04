---
title: Table.Buffer
---

# Table.Buffer


Uložením do vyrovnávací paměti tabulku během vyhodnocení izoluje od externích změn.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Uložením do vyrovnávací paměti tabulku během vyhodnocení izoluje od externích změn. Ukládání do vyrovnávací paměti je mělké. Vynutí vyhodnocení všech skalárních hodnot buněk, ale ponechá neskalární hodnoty (záznamy, seznamy, tabulky apod.) tak, jak jsou.

-   `table`: Tabulka, která se má do vyrovnávací paměti vložit.
-   `options`: (Volitelné) Je možné použít následující hodnoty záznamů možností:
     -   `BufferMode`: Režim vyrovnávací paměti, který popisuje typ vyrovnávací paměti, který se má provést. Tato možnost může být `BufferMode.Eager` nebo `BufferMode.Delayed`.

Použití této funkce může nebo nemusí zrychlit spouštění dotazů. V některých případech můžou vaše dotazy běžet pomaleji kvůli přidanému objemu čtení všech dat a ukládání do paměti, stejně jako kvůli skutečnosti, že ukládání do vyrovnávací paměti brání posouváním ve směru server-klient. Pokud data nemusí být ukládána do vyrovnávací paměti, ale chcete zabránit posouvání ve směru server-klient, použijte místo toho `Table.StopFolding`.


## Examples

### Example #1
Načtěte všechny řádky tabulky SQL do paměti, aby se už žádné podřízené operace nemohly dotazovat SQL serveru.
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
