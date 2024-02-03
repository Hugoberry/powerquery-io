---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Retorna todas as tabelas encontradas em um arquivo PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Retorna tabelas encontradas em <code>pdf</code>. Um parâmetro de registro opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:    <ul><li><code>Implementation</code> : A vers&#227;o do algoritmo a ser usada ao identificar tabelas. As vers&#245;es antigas est&#227;o dispon&#237;veis apenas para compatibilidade com vers&#245;es anteriores, para evitar que consultas antigas sejam quebradas por atualiza&#231;&#245;es de algoritmo. A vers&#227;o mais recente sempre deve fornecer os melhores resultados. Os valores v&#225;lidos s&#227;o &quot;1,3&quot;, &quot;1,2&quot;, &quot;1,1&quot; ou nulo.</li><li><code>StartPage</code> : Especifica a primeira p&#225;gina no intervalo de p&#225;ginas a ser analisado. Padr&#227;o: 1.</li><li><code>EndPage</code> : Especifica a &#250;ltima p&#225;gina no intervalo de p&#225;ginas a ser analisado. Padr&#227;o: a &#250;ltima p&#225;gina do documento.</li><li><code>MultiPageTables</code> : Controla se tabelas semelhantes em p&#225;ginas consecutivas ser&#227;o automaticamente combinadas em uma &#250;nica tabela. Padr&#227;o: true.</li><li><code>EnforceBorderLines</code> : Controla se linhas de borda s&#227;o sempre impostas como limites da c&#233;lula (quando for true) ou simplesmente usadas como uma dica dentre muitas para determinar os limites da c&#233;lula (quando for false). Padr&#227;o: false.</li></ul>    


## Examples

### Example #1 
Retorna as tabelas contidas em sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Dados acessados
