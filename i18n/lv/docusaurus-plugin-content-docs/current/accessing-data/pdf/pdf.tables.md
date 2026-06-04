---
title: Pdf.Tables
---

# Pdf.Tables


Atgriež visas PDF failā atrastās tabulas.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Atgriež visas tabulas, kas tika atrastas sadaļā `pdf`. Lai norādītu papildu rekvizītus, var nodrošināt neobligātu ieraksta parametru `options`. Ierakstā var būt šādi lauki:

-   `Implementation` : Tā algoritma versija, kas jāizmanto, identificējot tabulas. Vecās versijas ir pieejamas tikai atpakaļsaderības nodrošināšanai, lai novērstu veco vaicājumu nedarbošanos algoritmu atjaunināšanas dēļ. Jaunākajai versijai vienmēr būs vislabākie rezultāti. Derīgās vērtības ir "1.3", "1.2", "1.1" vai nulle.
-   `StartPage` : Norāda lappušu diapazona pirmo pārbaudāmo lappusi. Noklusējuma vērtība ir 1.
-   `EndPage` : Norāda lappušu diapazona pēdējo pārbaudāmo lappusi. Noklusējuma vērtība ir dokumenta pēdējā lappuse.
-   `MultiPageTables` : Nosaka to, vai līdzīgas tabulas secīgās lapās tiks automātiski apvienotas vienā tabulā. Noklusējuma vērtība ir True.
-   `EnforceBorderLines` : Nosaka to, vai apmales līnijas ir vienmēr tiek izmantotas kā šūnas robežas (ja vērtība ir True). Var izmantot arī kā vienu norādi no daudzām, lai noteiktu šūnas robežas (ja vērtība ir False). Noklusējuma vērtība ir False.


## Examples

### Example #1
Tiek atgrieztas tabulas, kas atrodas failā sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\:\foosample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Notiek piekļūšana datiem
