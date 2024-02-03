---
title: Table.Group
---

# Table.Group


## Description

Řádky skupin v tabulce, které mají stejný klíč


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Details

Seskupí řádky <code>table</code> podle klíčových sloupců definovaných parametrem <code>key</code>. Parametr <code>key</code> může být název jednoho sloupce nebo seznam názvů sloupců.    Pro každou skupinu je vytvořen záznam obsahující klíčové sloupce (a jejich hodnoty) společně s agregovanými sloupci zadanými parametrem <code>aggregatedColumns</code>.    Volitelně můžou být určeny také parametry <code>groupKind</code> a <code>comparer</code>.<br />    <br />    Pokud jsou data již seřazena podle klíčových sloupců, můžete zadat parametr <code>groupKind</code> z GroupKind.Local. To může v určitých případech zlepšit výkon seskupení,    protože se všechny řádky s danou sadou klíčových hodnot považují za souvislé.<br />    <br />    Při předávání parametru <code>comparer</code> si uvědomte, že pokud se odlišné klíče považují za shodné, může se řádek umístit ve skupině, jejíž klíče se liší od klíčů řádku.<br />    <br />    Tato funkce nezaručuje řazení řádků, které vrací.  


## Examples

### Example #1 
Seskupí tabulku přidáním agregovaného sloupce [total] obsahujícího součet cen (&#34;each List.Sum([price])&#34;).
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
