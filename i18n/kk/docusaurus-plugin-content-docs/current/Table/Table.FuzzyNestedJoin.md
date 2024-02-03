---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Қамтамасыз етілген бағандарда кестелер арасында анық емес біріктіруді орындайды және жаңа бағанда біріктіру нәтижесін береді.


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


## Details

<code>key1</code> (<code>table1</code> үшін) және <code>key2</code> (<code>table2</code> үшін) арқылы таңдалған кілт бағандары мәндері бойынша анық емес сәйкестік негізінде <code>table1</code> жолдарын <code>table2</code> жолдарымен біріктіреді. Нәтижелер <code>newColumnName</code> деп аталатын жаңа бағанда қайтарылады.<br />Анық емес сәйкестік мәтіннің теңдігіне емес, ал мәтіннің ұқсастығына негізделген салыстыру болып табылады.<br />Қосымша <code>joinKind</code> орындалатын біріктіру түрін көрсетеді. Әдепкіде <code>joinKind</code> көрсетілмесе, сол жақ сыртқы біріктіру орындалады. Параметрлер мынаны қамтиды:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Кілт бағандарын салыстыру әдісін көрсету үшін <code>joinOptions</code> қосымша жиынтығын қосуға болады. Параметрлер мынаны қамтиды:    <ul><li><code>ConcurrentRequests</code> : 1 мен 8 бар арасындағы сан анық емес сәйкестік үшін пайдаланылатын параллель ағындар санын көрсетеді. Әдепкі мән — 1.</li><li><code>Culture</code> : Жазбаларды тіл және аймаққа тән ережелер негізінде сәйкестендіруге мүмкіндік береді. Ол кез келген жарамды тіл және аймақтық параметр атауы бола алады. Мысалы, &quot;ja-JP&quot; тіл және аймақтық параметрі жазбаларды жапон тілі және аймақтық параметрлері негізінде сәйкестендіреді. Әдепкі мәні инвариант ағылшын тілі және аймақтық параметрлері негізінде сәйкестендіретін &quot;&quot; болып табылады.</li><li><code>IgnoreCase</code> : Логикалық (шын/жалған) мән регистрді ескермейтін кілтті сәйкестендіруге мүмкіндік береді. Мысалы, шын болғанда, &quot;Жүзім&quot; мәні &quot;жүзім&quot; деп сәйкестендіріледі. Әдепкі мәні - шын.</li><li><code>IgnoreSpace</code> : Логикалық (шын/жалған) мән сәйкестіктерді табу үшін мәтін бөліктерін біріктіруге мүмкіндік береді. Мысалы, шын болғанда, &quot;Жү зім&quot; мәні &quot;Жүзім&quot; деп сәйкестендіріледі. Әдепкі мәні - шын.</li><li><code>NumberOfMatches</code> : Әрбір кіріс жолы үшін қайтаруға болатын сәйкес жолдардың максимал санын көрсететін бүтін сан. Мысалы, 1 мәні әрбір кіріс жолы үшін ең көбі бір сәйкес жолды қайтарады. Егер бұл параметр берілмесе, барлық сәйкес жолдар қайтарылады.</li><li><code>SimilarityColumnName</code> : Кіріс мәні мен сол кірісті көрсететін мән арасындағы ұқсастықты көрсететін баған атауы. Әдепкі мәні бос болады, бұл жағдайда ұқсастықтар үшін жаңа баған қосылмайды.</li><li><code>Threshold</code> : 0,00 және 1,00 аралығындағы сан екі мән сәйкестендірілетін ұқсастық мәнін көрсетеді.    Мысалы, &quot;Жүзім&quot; және &quot;Жүім&quot; (&quot;з&quot; әрпі жоқ) осы параметр 0,90 мәнінен аз болса ғана сәйкестендіріледі.    1,00 шегі дәл сәйкестіктерге ғана рұқсат етеді.    (Нақты емес &quot;дәл сәйкестік&quot; регистр, сөздер тәртібі және тыныс белгілері сияқты айырмашылықтарды елемеуі мүмкін екенін ескеріңіз.)    Әдепкі мәні: 0,80.</li><li><code>TransformationTable</code> : Жазбаларды реттелетін мәнді салыстыру негізінде сәйкестендіруге мүмкіндік беретін кесте. Онда &quot;Қайдан&quot; және &quot;Қайдан&quot; бағандары болуы керек. Мысалы, түрлендіру кестесінде &quot;Жүзім&quot; мәні бар &quot;Қайдан&quot; бағаны және &quot;Мейіздер&quot; мәні бар &quot;Қайда&quot; бағаны болса, &quot;Жүзім&quot; &quot;Мейіздер&quot; мәнімен сәйкестендіріледі. Түрлендіру түрлендіру кестесіндегі мәтіннің барлық нұсқаларына қолданылатынын ескеріңіз. Жоғарыдағы түрлендіру кестесінде &quot;Жүзім тәтті&quot; мәні сонымен қатар &quot;Мейіздер тәтті&quot; деп сәйкестендіріледі.</li></ul><br />


## Examples

### Example #1 
[FirstName] негізіндегі екі кестені сол жақ ішкі анық емес біріктіру
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
