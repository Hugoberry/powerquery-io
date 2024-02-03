---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Excel жұмыс кітабының контентін қайтарады.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Excel жұмыс кітабының контентін қайтарады.    <ul>     <li> <code>useHeaders</code> бос болуы, логикалық (шын/жалған) мән болуы мүмкін, әр қайтарылған кестенің бірінші жолын тақырып ретінде немесе параметрлер жазбасы ретінде қарастыруды көрсетеді. Әдепкі: жалған.</li>     <li> <code>delayTypes</code> бос болуы немесе логикалық (шын/жалған) мән болуы мүмкін, әр қайтарылған кестенің бағандарының түрі көрсетілмеген күйде қалуын көрсетеді. Әдепкі: жалған.</li>    </ul>    <code>useHeaders</code> үшін жазба көрсетілсе (және <code>delayTypes</code> - бос), келесі жазба өрістері берілуі мүмкін:    <ul>     <li> <code>UseHeaders</code>: бос немесе логикалық (шын/жалған) мән болуы мүмкін, әр қайтарылған кестенің бірінші жолын тақырып ретінде қарастыруды көрсетеді. Әдепкі: жалған.</li>     <li> <code>DelayTypes</code>: бос болуы немесе логикалық (шын/жалған) мән болуы мүмкін, әр қайтарылған кестенің бағандарының түрі көрсетілмеген күйде қалуын көрсетеді. Әдепкі: жалған.</li>     <li> <code>InferSheetDimensions</code>: бос болуы немесе логикалық (шын/жалған) мән болуы мүмкін, деректерді қамтитын жұмыс парағының аумағын файлдан өлшемдер метадеректерін оқу арқылы емес, ал жұмыс парағының өзін оқу арқылы алу керектігін көрсетеді. Бұл өлшемдер метадеректері қате болған жағдайларда пайдалы болуы мүмкін. Бұл опцияға тек Open XML Excel файлдары үшін қолдау көрсетіледі, бұрынғы Excel файлдарына қолдау көрсетілмейді. Әдепкі: жалған.</li>    </ul>    


## Examples

### Example #1 
Excel жұмыс кітабынан 1-парақ мазмұнын қайтарыңыз.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
