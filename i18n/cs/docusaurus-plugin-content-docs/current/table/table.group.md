---
title: Table.Group
---

# Table.Group


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


## Remarks

Seskupí řádky `table` podle klíčových sloupců definovaných parametrem `key`. Parametr `key` může být název jednoho sloupce nebo seznam názvů sloupců. Pro každou skupinu je vytvořen záznam obsahující klíčové sloupce (a jejich hodnoty) společně s agregovanými sloupci zadanými parametrem `aggregatedColumns`. Volitelně můžou být určeny také parametry `groupKind` a `comparer`.  
  
Pokud jsou data již seřazena podle klíčových sloupců, můžete zadat parametr `groupKind` z GroupKind.Local. To může v určitých případech zlepšit výkon seskupení, protože se všechny řádky s danou sadou klíčových hodnot považují za souvislé.  
  
Při předávání parametru `comparer` si uvědomte, že pokud se odlišné klíče považují za shodné, může se řádek umístit ve skupině, jejíž klíče se liší od klíčů řádku.  
  
Tato funkce nezaručuje řazení řádků, které vrací.


## Examples

### Example #1
Seskupí tabulku přidáním agregovaného sloupce \[total\] obsahujícího součet cen ("each List.Sum(\[price\])").
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
