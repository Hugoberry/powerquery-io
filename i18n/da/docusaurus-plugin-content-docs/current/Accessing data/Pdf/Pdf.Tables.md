---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Returnerer de tabeller, der findes i en PDF-fil.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Returnerer tabeller fundet i <code>pdf</code>. Der kan angives en valgfri postparameter, <code>options</code>, for at angive yderligere egenskaber. Posten kan indeholde følgende felter:    <ul><li><code>Implementation</code> : Den version af algoritmen, der skal bruges til at identificere tabeller. Gamle versioner er kun tilg&#230;ngelige til bagudkompatibilitet, s&#229; gamle foresp&#248;rgsler forhindres i at blive brudt af algoritmeopdateringer. Den nyeste version b&#248;r altid give de bedste resultater. Gyldige v&#230;rdier er &quot;1,3&quot;, &quot;1,2&quot;, &quot;1,1&quot; eller nul.</li><li><code>StartPage</code> : Angiver den f&#248;rste side i udsnittet af sider, der skal unders&#248;ges. Som standard: 1.</li><li><code>EndPage</code> : Angiver den sidste side i udsnittet af sider, der skal unders&#248;ges. Standard: den sidste side i dokumentet.</li><li><code>MultiPageTables</code> : Kontrollerer, om ensartede tabeller p&#229; flere sider i tr&#230;k automatisk samles til en enkelt tabel. Som standard: true.</li><li><code>EnforceBorderLines</code> : Angiver, om kantlinjer altid gennemtvinges som cellegr&#230;nser (hvis det er true) eller bare er &#233;n faktor blandt mange andre, som bestemmer cellegr&#230;nser (hvis det er false). Som standard: false.</li></ul>    


## Examples

### Example #1 
Returnerer tabellerne i eksempel.pdf.
```powerquery
Pdf.Tables(File.Contents ("c:\eksempel.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Tilgår data
