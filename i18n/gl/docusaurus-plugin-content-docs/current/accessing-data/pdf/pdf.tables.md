---
title: Pdf.Tables
---

# Pdf.Tables


Devolve todas as táboas atopadas nun ficheiro PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Devolve as táboas de `pdf`. Pode fornecerse un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:

-   `Implementation` : Versión do algoritmo que se usará ao identificar as táboas. As versións antigas só están dispoñibles para a compatibilidade con versións anteriores co fin de evitar que as actualizacións do algoritmo quebren as consultas antigas. A versión máis recente sempre debe ofrecer os mellores resultados. Os valores válidos son"1.3", "1.2", “1.1” ou nulo.
-   `StartPage` : Especifica a primeira páxina no intervalo de páxinas que se examinará. Valor predefinido: 1.
-   `EndPage` : Especifica a última páxina do intervalo de páxinas que se vai examinar. Valor predefinido: a última páxina do documento.
-   `MultiPageTables` : Controla se táboas similares en páxinas consecutivas se combinarán automaticamente nunha soa táboa. Valor predefinido: true.
-   `EnforceBorderLines` : Controla se as liñas de bordos se aplican sempre como límites da cela (cando é true) ou só como unha pista de moitas para determinar os límites da cela (cando é false). Valor predefinido: false.


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
