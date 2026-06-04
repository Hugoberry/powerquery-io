---
title: Table.TransformColumns
---

# Table.TransformColumns


Muuntaa vähintään yhden sarakkeen arvot.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Muuntaa määritetyn taulukon käyttämällä luettelon kutakin saraketoimintoa.

-   `table`: Muunnettava taulukko.
-   `transformOperations`: Taulukkoon tehtävät muunnokset. Tämän parametrin muoto on joko \{ column name, transformation \} tai \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Valinnainen) Oletusmuunnos, jota käytetään kaikissa sarakkeissa, joita ei ole lueteltu kohteessa `transformOperations`.
-   `missingField`: (Valinnainen) Määrittää odotetun toiminnon puuttuville arvoille. Jos luettelossa olevaa `transformOperations`\-saraketta ei ole, ilmenee virhe (`MissingField.Error`), ellei tämä parametri määritä vaihtoehtoa. Käytä jotakin seuraavista arvoista:
    -   `MissingField.UseNull`: Puuttuvat kentät sisällytetään `null`\-arvoina.
    -   `MissingField.Ignore`: Puuttuvat kentät ohitetaan.


## Examples

### Example #1
Muunna sarakkeen tekstiarvot \[A\] lukuarvoiksi ja sarakkeen lukuarvot \[B\] tekstiarvoiksi.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2
Muunna puuttuvan sarakkeen \[X\] lukuarvot tekstiksi ja käytä arvoa `null` oletusarvona sarakkeille, joita ei ole olemassa.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #3
Kasvata sarakkeen \[B\] lukuarvoja ja muunna ne tekstiarvoiksi ja muunna kaikki muut sarakkeet luvuiksi.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```


### Example #4
Siirrä ajoitetut huoltotehtävät, jotka osuvat Yhdysvaltain pyhäpäiville, seuraavaan päivään tai jos pyhä on perjantaina, seuraavaan maanantaihin.
```powerquery
let
    MaintenanceSchedule = #table(type table [Task = text, Date = date],
    {
        {"HVAC Check", #date(2025, 7, 10)},         // Not a holiday
        {"Window Washing", #date(2025, 9, 1)},      // Labor Day
        {"Fire Drill", #date(2025, 9, 17)},         // Not a holiday
        {"Light Replacement", #date(2025, 11, 27)}  // Thanksgiving
    }),
    USHolidays = {
        #date(2025, 1, 1),   // New Year's Day
        #date(2025, 7, 4),   // Independence Day
        #date(2025, 9, 1),   // Labor Day
        #date(2025, 11, 27), // Thanksgiving
        #date(2025, 12, 25)  // Christmas
    },
    AdjustedSchedule = Table.TransformColumns(
        MaintenanceSchedule,
        {{"Date", each if List.Contains(USHolidays, _) then
            if Date.DayOfWeek(_, Day.Sunday) = 5 then
                Date.AddDays(_, 3)     // Friday to Monday
            else
                Date.AddDays(_, 1)     // Other to next day
        else _, type date}}
    )
in
    AdjustedSchedule
```

Result: 
```powerquery
#table(type table[Task = text, Date = date],
{
    {"HVAC Check", #date(2025, 7, 10)},
    {"Window Washing", #date(2025, 9, 2)},
    {"Fire Drill", #date(2025, 9, 17)},
    {"Light Replacement", #date(2025, 11, 28)}
})
```




## Category
Table.Transformation
