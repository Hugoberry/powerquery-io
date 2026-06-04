---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Кестедегі көрсетілген бағанның мәндерін анық емес топтау арқылы алынған ерекше мәндері бар жаңа бағанды қосады.


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

`newColumnName` жаңа бағанын `columnName` көрсеткіш мәндерімен `table` құрамына қосады. Көрсеткіштер әр жол үшін `columnName` ішіндегі мәндерді анық емес сәйкестендіру арқылы алынады.

`options` қосымша жинағын кілт бағандарын салыстыру жолын көрсету үшін қосуға болады. Параметрлерге мыналар кіреді:

-   `Culture` : Жазбаларды тіл және аймаққа тән ережелер негізінде топтауға мүмкіндік береді. Ол кез келген жарамды тіл және аймақтық параметр атауы бола алады. Мысалы, "ja-JP" тіл және аймақтық параметрі жазбаларды жапон тілі және аймақтық параметрлері негізінде топтайды. Әдепкі мәні инвариант ағылшын тілі және аймақтық параметрлері негізінде топтайтын "" болып табылады.
-   `IgnoreCase` : Логикалық (шын/жалған) мән регистрді ескермейтін кілтті топтауға мүмкіндік береді. Мысалы, шын болғанда, "Жүзім" мәні "жүзім" деп топталады. Әдепкі мәні - шын.
-   `IgnoreSpace` : Логикалық (шын/жалған) мән топтарды табу үшін мәтін бөліктерін біріктіруге мүмкіндік береді. Мысалы, шын болғанда, "Жү зім" мәні "Жүзім" деп топталады. Әдепкі мәні - шын.
-   `SimilarityColumnName` : Кіріс мәні мен сол кірісті көрсететін мән арасындағы ұқсастықты көрсететін баған атауы. Әдепкі мәні бос болады, бұл жағдайда ұқсастықтар үшін жаңа баған қосылмайды.
-   `Threshold` : 0,00 және 1,00 аралығындағы сан екі мән топталатын ұқсастық мәнін көрсетеді. Мысалы, "Жүзім" және "Жүім" ("з" әрпі жоқ) осы параметр 0,90 мәнінен аз болса ғана бірге топталады. 1,00 шегі дәл сәйкестіктерге ғана рұқсат етеді. (Нақты емес "дәл сәйкестік" регистр, сөздер тәртібі және тыныс белгілері сияқты айырмашылықтарды елемеуі мүмкін екенін ескеріңіз.) Әдепкі мәні: 0,80.
-   `TransformationTable` : Жазбаларды реттелетін мәнді салыстыру негізінде топтауға мүмкіндік беретін кесте. Онда "Қайдан" және "Қайдан" бағандары болуы керек. Мысалы, түрлендіру кестесінде "Жүзім" мәні бар "Қайдан" бағаны және "Мейіздер" мәні бар "Қайда" бағаны болса, "Жүзім" "Мейіздер" мәнімен топталады. Түрлендіру түрлендіру кестесіндегі мәтіннің барлық нұсқаларына қолданылатынын ескеріңіз. Жоғарыдағы түрлендіру кестесінде "Жүзім тәтті" мәні сонымен қатар "Мейіздер тәтті" деп топталады.


## Examples

### Example #1
Қызметкерлердің орны үшін ерекше мәндерді табыңыз.
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
