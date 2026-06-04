---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Řádky skupin v tabulce podle přibližné shody klíčů


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

Seskupí řádky `table` podle přibližné shody hodnot v zadaném sloupci `key`, pro každý řádek. Pro jednotlivé skupiny se vytvoří záznam, který obsahuje klíčové sloupce (a jejich hodnoty) společně s agregovanými sloupci určenými pomocí `aggregatedColumns`. Tato funkce nemůže zaručit vrácení pevného pořadí řádků.

Jde zahrnout nepovinnou sadu `options`, která určuje, jak se mají klíčové sloupce porovnat. Možnosti zahrnují:

-   `Culture` : Povoluje seskupování záznamů podle pravidel specifických pro jazykovou verzi. Může to být jakýkoli platný název jazykové verze. Například možnost jazyková verze pro skupiny „ja-JP“ seskupí záznamy podle japonské jazykové verze. Výchozí hodnota je „“, která seskupuje na základě invariantní anglické jazykové verze.
-   `IgnoreCase` : Logická hodnota (true/false), která povoluje seskupení klíčů bez rozlišování velikosti písmen. Například při hodnotě true se „Hrozny“ seskupí s „hrozny“. Výchozí hodnota je true.
-   `IgnoreSpace` : Logická hodnota (true/false), která povoluje kombinování částí textu za účelem najít skupiny. Například při hodnotě true se „Hro zny“ seskupí s „Hrozny“. Výchozí hodnota je true.
-   `SimilarityColumnName` : Název sloupce, který zobrazuje podobnost mezi vstupní a reprezentativní hodnotou daného vstupu. Výchozí hodnota je null – v tomto případě se nový sloupec pro podobnosti nepřidá.
-   `Threshold` : Číslo mezi 0,00 a 1,00, které určuje skóre podobnosti, podle kterého se budou seskupovat dvě hodnoty. Například „Grapes“ a „Graes“ (chybí „p“) se seskupují jenom v případě, že je tato možnost nastavená na hodnotu menší než 0,90. Prahová hodnota 1,00 povoluje jenom přesnou shodu. (Mějte na paměti, že přibližná shoda může ignorovat rozdíly, jako jsou malá a velká písmena, pořadí slov nebo interpunkce.) Výchozí hodnota je 0,80.
-   `TransformationTable` : Tabulka, která umožňuje seskupování záznamů na základě mapování vlastních hodnot. Musí obsahovat sloupce „Z“ a „Na“. Například „Hrozny“ se seskupí s „Hrozinky“, pokud se poskytne transformační tabulka se sloupcem „Z“ obsahujícím „Hrozny“ a sloupcem „Na“, který obsahuje „Hrozinky“. Všimněte si, že se transformace použije na všechny výskyty textu v transformační tabulce. Pomocí výše uvedené transformační tabulky se také „Hrozny jsou sladké“ seskupí s „Hrozinky jsou sladké“.


## Examples

### Example #1
Seskupení tabulky a přidání agregovaného sloupce \[Count\], který obsahuje počet zaměstnanců v jednotlivých lokalitách (`each Table.RowCount(_)`).
```powerquery
Table.FuzzyGroup(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
