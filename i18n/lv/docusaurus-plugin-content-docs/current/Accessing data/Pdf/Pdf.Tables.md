---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Atgriež visas PDF failā atrastās tabulas.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Atgriež visas tabulas, kas tika atrastas sadaļā <code>pdf</code>. Lai norādītu papildu rekvizītus, var nodrošināt neobligātu ieraksta parametru <code>options</code>. Ierakstā var būt šādi lauki:    <ul><li><code>Implementation</code> : Tā algoritma versija, kas jāizmanto, identificējot tabulas. Vecās versijas ir pieejamas tikai atpakaļsaderības nodrošināšanai, lai novērstu veco vaicājumu nedarbošanos algoritmu atjaunināšanas dēļ. Jaunākajai versijai vienmēr būs vislabākie rezultāti. Derīgās vērtības ir &quot;1.3&quot;, &quot;1.2&quot;, &quot;1.1&quot; vai nulle.</li><li><code>StartPage</code> : Norāda lappušu diapazona pirmo pārbaudāmo lappusi. Noklusējuma vērtība ir&#160;1.</li><li><code>EndPage</code> : Norāda lappušu diapazona pēdējo pārbaudāmo lappusi. Noklusējuma vērtība ir dokumenta pēdējā lappuse.</li><li><code>MultiPageTables</code> : Nosaka to, vai līdzīgas tabulas secīgās lapās tiks automātiski apvienotas vienā tabulā. Noklusējuma vērtība ir True.</li><li><code>EnforceBorderLines</code> : Nosaka to, vai apmales līnijas ir vienmēr tiek izmantotas kā šūnas robežas (ja vērtība ir True). Var izmantot arī kā vienu norādi no daudzām, lai noteiktu šūnas robežas (ja vērtība ir False). Noklusējuma vērtība ir False.</li></ul>    


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
