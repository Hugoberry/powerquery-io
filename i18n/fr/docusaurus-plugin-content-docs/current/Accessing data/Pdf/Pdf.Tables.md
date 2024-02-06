---
title: Pdf.Tables
---

# Pdf.Tables


Retourne les tables trouvées dans un fichier PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Retourne les tables trouvées dans <code>pdf</code>. Vous pouvez indiquer un paramètre d'enregistrement facultatif, <code>options</code>, pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :    <ul><li><code>Implementation</code> : Version de l’algorithme &#224; utiliser lors de l’identification des tables. Les anciennes versions sont disponibles uniquement &#224; des fins de compatibilit&#233; descendante afin d’emp&#234;cher les anciennes requ&#234;tes d’&#234;tre interrompues par les mises &#224; jour d’algorithme. La version la plus r&#233;cente doit toujours donner les meilleurs r&#233;sultats. Les valeurs valides sont &#171;&#160;1.3&#160;&#187;, &#171;&#160;1.2&#160;&#187;, &#171;&#160;1.1&#160;&#187; ou null.</li><li><code>StartPage</code> : Sp&#233;cifie la premi&#232;re page de la plage de pages &#224; examiner. Valeur par d&#233;faut&#160;: 1.</li><li><code>EndPage</code> : Sp&#233;cifie la derni&#232;re page dans la plage de pages &#224; examiner. Valeur par d&#233;faut&#160;: derni&#232;re page du document.</li><li><code>MultiPageTables</code> : D&#233;termine si des tables similaires sur des pages cons&#233;cutives sont automatiquement regroup&#233;es en une seule table. Valeur par d&#233;faut&#160;: true.</li><li><code>EnforceBorderLines</code> : D&#233;termine si des bordures sont toujours appliqu&#233;es comme limites de cellule (quand la valeur est true), ou simplement utilis&#233;es comme un indicateur parmi d&#39;autres pour d&#233;terminer les limites de cellule (quand la valeur est false). Valeur par d&#233;faut&#160;: false.</li></ul>    


## Examples

### Example #1 
Retourne les tables contenues dans sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Accès aux données
