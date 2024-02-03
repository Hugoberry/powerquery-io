---
title: Pdf.Tables
---

# Pdf.Tables


## Description

PDF файлында табылған кез келген кестелерді қайтарады.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

<code>pdf</code> ішінде табылған кестелерді қайтарады. Қосымша сипаттарды көрсету үшін <code>options</code> қосымша жазба параметрі берілуі мүмкін. Жазбада келесі өрістер болуы мүмкін:    <ul><li><code>Implementation</code> : Кестелерді анықтау кезінде пайдаланылатын алгоритм нұсқасы. Алгоритм жаңартулары ескі сұрауларды бұзбауы үшін, ескі нұсқалар тек кері үйлесімділік үшін қолжетімді. Ең жаңа нұсқа әрқашан ең үздік нәтижелерді беруі тиіс. Жарамды мәндер: &quot;1.3&quot;, &quot;1.2&quot;, &quot;1.1&quot; немесе бос мән.</li><li><code>StartPage</code> : Тексерілетін беттер аумағындағы бірінші бетті көрсетеді. Әдепкі: 1.</li><li><code>EndPage</code> : Тексерілетін беттер ауқымындағы соңғы бетті көрсетеді. Әдепкі: құжаттың соңғы беті.</li><li><code>MultiPageTables</code> : Қатар келетін беттердегі ұқсас кестелердің бір кестеге автоматты түрде біріктірілу мүмкіндігін басқарады. Әдепкі: шын.</li><li><code>EnforceBorderLines</code> : Жиек сызықтарының әрқашан ұяшық шекаралары ретінде қолданылатынын (шын болғанда) немесе ұяшық шекараларын анықтау үшін көптеген нұсқаулардың біреуі ретінде пайдаланылатынын (жалған болғанда) басқарады. Әдепкі: жалған.</li></ul>    


## Examples

### Example #1 
sample.pdf файлындағы кестелерді қайтарады.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Деректерге қол жеткізу