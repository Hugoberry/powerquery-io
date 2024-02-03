---
title: Table.Buffer
---

# Table.Buffer


## Description

Uložením do vyrovnávací paměti tabulku během vyhodnocení izoluje od externích změn.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Ukládá tabulku do vyrovnávací paměti a během vyhodnocování ji izoluje od externích změn.    Ukládání do vyrovnávací paměti je mírné. Vynutí vyhodnocení všech skalárních hodnot buněk, ale ponechá neskalární hodnoty (záznamy, seznamy, tabulky a podobně) tak, jak jsou.     <br />    <br />    Upozorňujeme, že použití této funkce může nebo nemusí mít za následek rychlejší spouštění dotazů. V některých případech můžou vaše dotazy běžet pomaleji kvůli přidaným     nárokům na čtení všech dat a jejich ukládání do paměti a také kvůli tomu, že ukládání do vyrovnávací paměti znemožňuje posouvání. Pokud se data nemusejí    ukládat do vyrovnávací paměti, ale chcete pouze zabránit posouvání, použijte místo toho <code>Table.StopFolding</code>.


## Examples

### Example #1 
Načtěte všechny řádky tabulky SQL do paměti, aby se už žádné podřízené operace nemohly dotazovat na SQL server.
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
