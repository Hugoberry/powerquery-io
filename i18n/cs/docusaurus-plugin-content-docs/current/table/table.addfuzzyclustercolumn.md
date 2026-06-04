---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Přidá nový sloupec s hodnotami zástupců získanými přibližným seskupováním hodnot zadaného sloupce v tabulce.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Přidá do tabulky `table` nový sloupec `newColumnName` s reprezentativními hodnotami `columnName`. Zástupci pro jednotlvé řádky se získají pomocí přibližné shody s hodnotami v `columnName`.

Jde zahrnout nepovinnou sadu `options`, která určuje, jak se mají klíčové sloupce porovnat. Možnosti zahrnují:

-   `Culture` : Povoluje seskupování záznamů podle pravidel specifických pro jazykovou verzi. Může to být jakýkoli platný název jazykové verze. Například možnost jazyková verze pro skupiny „ja-JP“ seskupí záznamy podle japonské jazykové verze. Výchozí hodnota je „“, která seskupuje na základě invariantní anglické jazykové verze.
-   `IgnoreCase` : Logická hodnota (true/false), která povoluje seskupení klíčů bez rozlišování velikosti písmen. Například při hodnotě true se „Hrozny“ seskupí s „hrozny“. Výchozí hodnota je true.
-   `IgnoreSpace` : Logická hodnota (true/false), která povoluje kombinování částí textu za účelem najít skupiny. Například při hodnotě true se „Hro zny“ seskupí s „Hrozny“. Výchozí hodnota je true.
-   `SimilarityColumnName` : Název sloupce, který zobrazuje podobnost mezi vstupní a reprezentativní hodnotou daného vstupu. Výchozí hodnota je null – v tomto případě se nový sloupec pro podobnosti nepřidá.
-   `Threshold` : Číslo mezi 0,00 a 1,00, které určuje skóre podobnosti, podle kterého se budou seskupovat dvě hodnoty. Například „Grapes“ a „Graes“ (chybí „p“) se seskupují jenom v případě, že je tato možnost nastavená na hodnotu menší než 0,90. Prahová hodnota 1,00 povoluje jenom přesnou shodu. (Mějte na paměti, že přibližná shoda může ignorovat rozdíly, jako jsou malá a velká písmena, pořadí slov nebo interpunkce.) Výchozí hodnota je 0,80.
-   `TransformationTable` : Tabulka, která umožňuje seskupování záznamů na základě mapování vlastních hodnot. Musí obsahovat sloupce „Z“ a „Na“. Například „Hrozny“ se seskupí s „Hrozinky“, pokud se poskytne transformační tabulka se sloupcem „Z“ obsahujícím „Hrozny“ a sloupcem „Na“, který obsahuje „Hrozinky“. Všimněte si, že se transformace použije na všechny výskyty textu v transformační tabulce. Pomocí výše uvedené transformační tabulky se také „Hrozny jsou sladké“ seskupí s „Hrozinky jsou sladké“.


## Examples

### Example #1
Najde hodnoty zástupců pro umístění zaměstnanců.
```powerquery
Table.AddFuzzyClusterColumn(
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
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
