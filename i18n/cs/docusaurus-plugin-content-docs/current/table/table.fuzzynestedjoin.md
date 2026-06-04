---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


Provede fuzzy spojení mezi tabulkami na dodaných sloupcích a vytvoří výsledek spojení v novém sloupci.


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Spojí řádky tabulky `table1` s řádky tabulky `table2` na základě přibližné shody hodnot klíčových sloupců vybraných funkcí `key1` (pro tabulku `table1`) a `key2` (pro tabulku `table2`). Výsledky se vrací v novém sloupci s názvem `newColumnName`.

Přibližná shoda je porovnání založené na podobnosti, nikoli na shodě textu.

Volitelná hodnota `joinKind` určuje druh prováděného spojení. Pokud se hodnota `joinKind` nezadá, provede se ve výchozím nastavení levé vnější spojení. Možnosti zahrnují:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Jde zahrnout nepovinnou sadu `joinOptions` a určit způsob porovnávání klíčových sloupců. Možnosti zahrnují::

-   `ConcurrentRequests` : Číslo mezi 1 a 8 určující počet paralelních vláken, které se mají použít pro přibližnou shodu. Výchozí hodnota je 1.
-   `Culture` : Povoluje shodu záznamů podle pravidel specifických pro jazykovou verzi. Může to být jakýkoli platný název jazykové verze. Například možnost jazyková verze pro skupiny „ja-JP“ posuzuje shodu záznamů podle japonské jazykové verze. Výchozí hodnota je „“, která posuzuje shodu na základě invariantní anglické jazykové verze.
-   `IgnoreCase` : Logická hodnota (true/false), která povoluje shodu klíčů bez rozlišování velikosti písmen. Například při hodnotě true se „Hrozny“ shoduje s „hrozny“. Výchozí hodnota je true.
-   `IgnoreSpace` : Logická hodnota (true/false), která povoluje kombinování části textu součástí za účelem najít shody. Například při hodnotě true se „Hro zny“ shoduje s „Hrozny“. Výchozí hodnota je true.
-   `NumberOfMatches` : Celé číslo určující maximální počet shodných řádků, které se dají vrátit, pro všechny řádky vstupu. Například hodnota 1 vrátí pro každý vstupní řádek nejvýše jeden shodný řádek. Pokud tato možnost není zadaná, vrátí se všechny shodné řádky.
-   `SimilarityColumnName` : Název sloupce, který zobrazuje podobnost mezi vstupní a reprezentativní hodnotou daného vstupu. Výchozí hodnota je null – v tomto případě se nový sloupec pro podobnosti nepřidá.
-   `Threshold` : Číslo mezi 0,00 a 1,00, které určuje skóre podobnosti, podle kterého se budou porovnávat dvě hodnoty. Například „Grapes“ a „Graes“ (chybí „p“) se shodují jenom v případě, že je tato možnost nastavená na hodnotu menší než 0,90. Prahová hodnota 1,00 povoluje jenom přesnou shodu. (Mějte na paměti, že přibližná shoda může ignorovat rozdíly, jako jsou malá a velká písmena, pořadí slov nebo interpunkce.) Výchozí hodnota je 0,80.
-   `TransformationTable` : Tabulka, která umožňuje určit shodu záznamů na základě mapování vlastních hodnot. Musí obsahovat sloupce „Z“ a „Na“. Například „Hrozny“ se budou shodovat s „Hrozinky“, pokud se poskytne transformační tabulka se sloupcem „Z“ obsahujícím „Hrozny“ a sloupcem „Na“, který obsahuje „Hrozinky“. Všimněte si, že se transformace použije na všechny výskyty textu v transformační tabulce. Pomocí výše uvedené transformační tabulky se také „Hrozny jsou sladké“ bude shodovat s „Hrozinky jsou sladké“.


## Examples

### Example #1
Levé vnitřní přibližné spojení dvou tabulek na základě \[FirstName\]
```powerquery
Table.FuzzyNestedJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    "NestedTable",
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        NestedTable = Table.FromRecords({
            [
                CustomerStateID = 1,
                FirstName2 = "Bob",
                State = "TX"
            ],
            [
                CustomerStateID = 2,
                FirstName2 = "bOB",
                State = "CA"
            ]
        })
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        NestedTable = Table.FromRecords({})
    ]
})
```




## Category
Table.Transformation
