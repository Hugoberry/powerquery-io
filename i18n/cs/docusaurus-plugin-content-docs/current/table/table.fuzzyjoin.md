---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Propojí dva ze řádky dvou tabulek, které se přibližně shodují na základě daných klíčů.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Spojí řádky tabulky `table1` s řádky tabulky `table2` na základě přibližného shody hodnot klíčových sloupců vybraných funkcí `key1` (pro tabulku `table1`) a `key2` (pro tabulku `table2`).

Přibližná shoda je porovnání založené na podobnosti, nikoli absolutní shodě textu.

Ve výchozím nastavení se provede vnitřní spojení, volitelně však jde zahrnout parametr `joinKind`, který určuje typ spojení. Možnosti:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Zahrnutá může být volitelná sada `joinOptions` pro určení způsobu porovnávání klíčových sloupců. Možnosti:

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
Table.FuzzyJoin(
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
        CustomerStateID = 1,
        FirstName2 = "Bob",
        State = "TX"
    ],
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 2,
        FirstName2 = "bOB",
        State = "CA"
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        CustomerStateID = null,
        FirstName2 = null,
        State = null
    ]
})
```




## Category
Table.Transformation
