---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Retorna les taules que s&#39;han trobat en un fitxer PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Retorna les taules trobades a <code>pdf</code>. Es pot proporcionar un paràmetre de registre opcional, <code>options</code>, per especificar propietats addicionals. El registre pot contenir els camps següents:    <ul><li><code>Implementation</code> : Versi&#243; de l&#39;algoritme que s&#39;utilitzar&#224; en identificar taules. Les versions antigues nom&#233;s estan disponibles per a la compatibilitat amb versions anteriors, per tal d&#39;evitar que les consultes antigues deixin de funcionar a causa de les actualitzacions dels algoritmes. La versi&#243; m&#233;s recent sempre ha de proporcionar els millors resultats. Els valors v&#224;lids s&#243;n &quot;1.3&quot;, &quot;1.2&quot;, &quot;1.1&quot; o nul.</li><li><code>StartPage</code> : Especifica la primera p&#224;gina de l&#39;interval de p&#224;gines que s&#39;ha d&#39;examinar. El valor per defecte &#233;s &quot;1&quot;.</li><li><code>EndPage</code> : Especifica l&#39;&#250;ltima p&#224;gina de l&#39;interval de p&#224;gines que s&#39;ha d&#39;examinar. L&#39;opci&#243; per defecte &#233;s l&#39;&#250;ltima p&#224;gina del document.</li><li><code>MultiPageTables</code> : Controla si les taules similars de les p&#224;gines consecutives es combinaran autom&#224;ticament en una sola taula. El valor per defecte &#233;s &quot;true&quot;.</li><li><code>EnforceBorderLines</code> : Controla si les l&#237;nies de vora s&#39;apliquen sempre com a l&#237;mits de cel&#183;la (quan el valor &#233;s &quot;true&quot;) o nom&#233;s s&#39;utilitzen com un dels suggeriments per determinar els l&#237;mits de la cel&#183;la (quan el valor &#233;s &quot;false&quot;). El valor per defecte &#233;s &quot;false&quot;.</li></ul>    


## Examples

### Example #1 
Retorna les taules incloses al fitxer sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Accés a les dades
