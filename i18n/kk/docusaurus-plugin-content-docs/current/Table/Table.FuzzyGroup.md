---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


## Description

Кестедегі жолдарды кілттердің анық емес сәйкестігі негізінде топтайды.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Details

<code>table</code> жолдарын әр жол үшін <code>key</code> көрсетілген бағанындағы мәндерді анық емес сәйкестендіру арқылы топтайды.    Әр топ үшін <code>aggregatedColumns</code> арқылы көрсетілген кез келген жинақталған бағандармен бірге кілт бағандарынан (және олардың мәндерінен) тұратын жазба құрылады.    Бұл функция жолдардың белгіленген ретін қайтаруға кепілдік бере алмайды.     Кілт бағандарын салыстыру жолын көрсету үшін <code>options</code> қосымша жиынтығын қосуға болады. Параметрлерге мыналар кіреді:    <ul><li><code>Culture</code> : Жазбаларды тіл және аймаққа тән ережелер негізінде топтауға мүмкіндік береді. Ол кез келген жарамды тіл және аймақтық параметр атауы бола алады. Мысалы, &quot;ja-JP&quot; тіл және аймақтық параметрі жазбаларды жапон тілі және аймақтық параметрлері негізінде топтайды. Әдепкі мәні инвариант ағылшын тілі және аймақтық параметрлері негізінде топтайтын &quot;&quot; болып табылады.</li><li><code>IgnoreCase</code> : Логикалық (шын/жалған) мән регистрді ескермейтін кілтті топтауға мүмкіндік береді. Мысалы, шын болғанда, &quot;Жүзім&quot; мәні &quot;жүзім&quot; деп топталады. Әдепкі мәні - шын.</li><li><code>IgnoreSpace</code> : Логикалық (шын/жалған) мән топтарды табу үшін мәтін бөліктерін біріктіруге мүмкіндік береді. Мысалы, шын болғанда, &quot;Жү зім&quot; мәні &quot;Жүзім&quot; деп топталады. Әдепкі мәні - шын.</li><li><code>SimilarityColumnName</code> : Кіріс мәні мен сол кірісті көрсететін мән арасындағы ұқсастықты көрсететін баған атауы. Әдепкі мәні бос болады, бұл жағдайда ұқсастықтар үшін жаңа баған қосылмайды.</li><li><code>Threshold</code> : 0,00 және 1,00 аралығындағы сан екі мән топталатын ұқсастық мәнін көрсетеді.    Мысалы, &quot;Жүзім&quot; және &quot;Жүім&quot; (&quot;з&quot; әрпі жоқ) осы параметр 0,90 мәнінен аз болса ғана бірге топталады.    1,00 шегі дәл сәйкестіктерге ғана рұқсат етеді.    (Нақты емес &quot;дәл сәйкестік&quot; регистр, сөздер тәртібі және тыныс белгілері сияқты айырмашылықтарды елемеуі мүмкін екенін ескеріңіз.)    Әдепкі мәні: 0,80.</li><li><code>TransformationTable</code> : Жазбаларды реттелетін мәнді салыстыру негізінде топтауға мүмкіндік беретін кесте. Онда &quot;Қайдан&quot; және &quot;Қайдан&quot; бағандары болуы керек. Мысалы, түрлендіру кестесінде &quot;Жүзім&quot; мәні бар &quot;Қайдан&quot; бағаны және &quot;Мейіздер&quot; мәні бар &quot;Қайда&quot; бағаны болса, &quot;Жүзім&quot; &quot;Мейіздер&quot; мәнімен топталады. Түрлендіру түрлендіру кестесіндегі мәтіннің барлық нұсқаларына қолданылатынын ескеріңіз. Жоғарыдағы түрлендіру кестесінде &quot;Жүзім тәтті&quot; мәні сонымен қатар &quot;Мейіздер тәтті&quot; деп топталады.</li></ul><br />    


## Examples

### Example #1 
Әр орындағы (&#34;әр Table.RowCount(_))&#34;) қызметкерлер саны бар жиынтық баған [Count] қосу арқылы кестелерді топтаңыз.
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
