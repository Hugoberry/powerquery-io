---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Pateikia bet kokias PDF faile rastas lenteles.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Pateikiamos bet kokios <code>pdf</code> esančios lentelės. Galima nurodyti pasirenkamą įrašo parametrą <code>options</code>, jei norima nurodyti papildomas ypatybes. Įrašas gali būti sudarytas iš šių laukų:    <ul><li><code>Implementation</code> : Algoritmo, naudotino identifikuojant lenteles, versija. Senąsias versijas galima naudoti tik siekiant užtikrinti atgalinį suderinamumą, kad senosios užklausos nebūtų nutrauktos algoritmų naujinimais. Naujausia versija visada turi užtikrinti geriausius rezultatus. Tinkamos reikšmės yra 1.3, 1.2, 1.1 arba null.</li><li><code>StartPage</code> : Nurodo pirmąjį tikrintinų puslapių eilės puslapį. Numatytoji reikšmė: 1.</li><li><code>EndPage</code> : Nurodo paskutinį tikrintinų puslapių eilės puslapį. Numatytoji reikšmė: paskutinis dokumento puslapis.</li><li><code>MultiPageTables</code> : Valdo, ar nuosekliai išdėstytuose puslapiuose esančios panašios lenteles bus automatiškai sujungiamos į vieną lentelę. Numatytoji reikšmė: „True“.</li><li><code>EnforceBorderLines</code> : Valdo, ar kraštinių linijos bus visada priverstinai taikomos kaip langelių ribos (kai reikšmė yra „True“), ar nustatant langelių ribas tiesiog bus naudojamos kaip vienas iš daugelio nurodymų (kai reikšmė yra „False“). Numatytoji reikšmė: „False“.</li></ul>    


## Examples

### Example #1 
Pateikiamos sample.pdf esančios lentelės.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Prieiga prie duomenų
