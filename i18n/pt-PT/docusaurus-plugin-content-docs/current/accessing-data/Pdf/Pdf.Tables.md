---
title: Pdf.Tables
---

# Pdf.Tables


Devolve todas as tabelas encontradas num ficheiro PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Devolve as bases de dados encontradas em <code>pdf</code>. Pode ser fornecido um parâmetro de registo opcional, <code>options</code>, para especificar propriedades adicionais. O registo pode conter os seguintes campos:    <ul><li><code>Implementation</code> : A vers&#227;o do algoritmo a utilizar ao identificar tabelas. As vers&#245;es antigas est&#227;o dispon&#237;veis apenas para retrocompatibilidade, para evitar que consultas antigas sejam interrompidas por atualiza&#231;&#245;es de algoritmos. A vers&#227;o mais recente deve sempre dar os melhores resultados. Os valores v&#225;lidos s&#227;o &quot;1.3&quot;, “1.2”, &quot;1.1&quot; ou nulo.</li><li><code>StartPage</code> : Especifica a primeira p&#225;gina no intervalo de p&#225;ginas a examinar. Predefini&#231;&#227;o: 1.</li><li><code>EndPage</code> : Especifica a &#250;ltima p&#225;gina no intervalo de p&#225;ginas a examinar. Predefini&#231;&#227;o: a &#250;ltima p&#225;gina do documento.</li><li><code>MultiPageTables</code> : Controla se as tabelas semelhantes em p&#225;ginas consecutivas v&#227;o ser combinadas automaticamente numa &#250;nica tabela. Predefini&#231;&#227;o: verdadeiro.</li><li><code>EnforceBorderLines</code> : Controla se as linhas dos limites s&#227;o sempre impostas como limites da c&#233;lula (se for verdadeiro) ou simplesmente utilizadas como uma sugest&#227;o entre muitas para determinar os limites da c&#233;lula (se for falso). Predefini&#231;&#227;o: falso.</li></ul>    


## Examples

### Example #1 
Devolve as tabelas contidas em sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
A aceder aos dados
