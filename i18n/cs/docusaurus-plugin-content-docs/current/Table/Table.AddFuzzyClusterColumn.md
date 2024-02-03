---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

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


## Details

Přidá do tabulky <code>table</code> nový sloupec <code>newColumnName</code> s reprezentativními hodnotami <code>columnName</code>. Zástupci pro jednotlvé řádky se získají pomocí přibližné shody s hodnotami v <code>columnName</code>.    Jde zahrnout nepovinnou sadu <code>options</code>, která určuje, jak se mají klíčové sloupce porovnat. Možnosti zahrnují:     <ul><li><code>Culture</code> : Povoluje seskupov&#225;n&#237; z&#225;znamů podle pravidel specifick&#253;ch pro jazykovou verzi. Může to b&#253;t jak&#253;koli platn&#253; n&#225;zev jazykov&#233; verze. Např&#237;klad možnost jazykov&#225; verze pro skupiny „ja-JP“ seskup&#237; z&#225;znamy podle japonsk&#233; jazykov&#233; verze. V&#253;choz&#237; hodnota je „“, kter&#225; seskupuje na z&#225;kladě invariantn&#237; anglick&#233; jazykov&#233; verze.</li><li><code>IgnoreCase</code> : Logick&#225; hodnota (true/false), kter&#225; povoluje seskupen&#237; kl&#237;čů bez rozlišov&#225;n&#237; velikosti p&#237;smen. Např&#237;klad při hodnotě true se „Hrozny“ seskup&#237; s „hrozny“. V&#253;choz&#237; hodnota je true.</li><li><code>IgnoreSpace</code> : Logick&#225; hodnota (true/false), kter&#225; povoluje kombinov&#225;n&#237; č&#225;st&#237; textu za &#250;čelem naj&#237;t skupiny. Např&#237;klad při hodnotě true se „Hro zny“ seskup&#237; s „Hrozny“. V&#253;choz&#237; hodnota je true.</li><li><code>SimilarityColumnName</code> : N&#225;zev sloupce, kter&#253; zobrazuje podobnost mezi vstupn&#237; a reprezentativn&#237; hodnotou dan&#233;ho vstupu. V&#253;choz&#237; hodnota je null – v tomto př&#237;padě se nov&#253; sloupec pro podobnosti nepřid&#225;.</li><li><code>Threshold</code> : Č&#237;slo mezi 0,00 a 1,00, kter&#233; určuje sk&#243;re podobnosti, podle kter&#233;ho se budou seskupovat dvě hodnoty.    Např&#237;klad „Grapes“ a „Graes“ (chyb&#237; „p“) se seskupuj&#237; jenom v př&#237;padě, že je tato možnost nastaven&#225; na hodnotu menš&#237; než 0,90.    Prahov&#225; hodnota 1,00 povoluje jenom přesnou shodu.    (Mějte na paměti, že přibližn&#225; shoda může ignorovat rozd&#237;ly, jako jsou mal&#225; a velk&#225; p&#237;smena, pořad&#237; slov nebo interpunkce.)     V&#253;choz&#237; hodnota je 0,80.</li><li><code>TransformationTable</code> : Tabulka, kter&#225; umožňuje seskupov&#225;n&#237; z&#225;znamů na z&#225;kladě mapov&#225;n&#237; vlastn&#237;ch hodnot. Mus&#237; obsahovat sloupce „Z“ a „Na“. Např&#237;klad „Hrozny“ se seskup&#237; s „Hrozinky“, pokud se poskytne transformačn&#237; tabulka se sloupcem „Z“ obsahuj&#237;c&#237;m „Hrozny“ a sloupcem „Na“, kter&#253; obsahuje „Hrozinky“. Všimněte si, že se transformace použije na všechny v&#253;skyty textu v transformačn&#237; tabulce. Pomoc&#237; v&#253;še uveden&#233; transformačn&#237; tabulky se tak&#233; „Hrozny jsou sladk&#233;“ seskup&#237; s „Hrozinky jsou sladk&#233;“.</li></ul><br />    


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
