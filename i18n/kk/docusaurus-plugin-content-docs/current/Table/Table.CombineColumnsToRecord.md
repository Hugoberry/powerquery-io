---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

Көрсетілген бағандарды жаңа жазба мәндері бар бағанға біріктіреді, онда әрбір жазбада біріктірілген баған атаулары мен мәндеріне сәйкес өріс атаулары мен мәндері болады.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Details

<code>table</code> көрсетілген бағандарын жаңа <code>newColumnName</code> жазба мәнді бағанына біріктіреді, мұнда әрбір жазбада біріктірілген бағандардың баған атаулары мен мәндеріне сәйкес келетін өріс атаулары мен мәндері болады. Егер <code>options</code> үшін жазба көрсетілсе, келесі параметрлер берілуі мүмкін:    <ul>     <li> <code>DisplayNameColumn</code>: Мәтін ретінде көрсетілсе, берілген баған атауы жазбаның көрсетілетін атауы ретінде қарастырылуы керектігін көрсетеді. Бұл жазбаның өзіндегі бағандардың біреуі болуы қажет емес.</li>     <li> <code>TypeName</code>: Мәтін ретінде көрсетілсе, алынатын жазба үшін логикалық түр атауын береді, ол жүктеу ортасы бойынша жұмыс режимін анықтау үшін деректерді жүктеу кезінде пайдаланылуы мүмкін.</li>    </ul>    



## Category
Table.Transformation
