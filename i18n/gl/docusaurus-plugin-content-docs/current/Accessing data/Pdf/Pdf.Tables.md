---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Devolve todas as táboas atopadas nun ficheiro PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Devolve as táboas de <code>pdf</code>. Pode fornecerse un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:    <ul><li><code>Implementation</code> : Versi&#243;n do algoritmo que se usar&#225; ao identificar as t&#225;boas. As versi&#243;ns antigas s&#243; est&#225;n dispo&#241;ibles para a compatibilidade con versi&#243;ns anteriores co fin de evitar que as actualizaci&#243;ns do algoritmo quebren as consultas antigas. A versi&#243;n m&#225;is recente sempre debe ofrecer os mellores resultados. Os valores v&#225;lidos son&quot;1.3&quot;, &quot;1.2&quot;, “1.1” ou nulo.</li><li><code>StartPage</code> : Especifica a primeira p&#225;xina no intervalo de p&#225;xinas que se examinar&#225;. Valor predefinido: 1.</li><li><code>EndPage</code> : Especifica a &#250;ltima p&#225;xina do intervalo de p&#225;xinas que se vai examinar. Valor predefinido: a &#250;ltima p&#225;xina do documento.</li><li><code>MultiPageTables</code> : Controla se t&#225;boas similares en p&#225;xinas consecutivas se combinar&#225;n automaticamente nunha soa t&#225;boa. Valor predefinido: true.</li><li><code>EnforceBorderLines</code> : Controla se as li&#241;as de bordos se aplican sempre como l&#237;mites da cela (cando &#233; true) ou s&#243; como unha pista de moitas para determinar os l&#237;mites da cela (cando &#233; false). Valor predefinido: false.</li></ul>    


## Examples

### Example #1 
Devolve as táboas de sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Acceso ao datos
