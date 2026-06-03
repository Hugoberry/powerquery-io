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

Devolve as bases de dados encontradas em `pdf`. Pode ser fornecido um parâmetro de registo opcional, `options`, para especificar propriedades adicionais. O registo pode conter os seguintes campos:

-   `Implementation` : A versão do algoritmo a utilizar ao identificar tabelas. As versões antigas estão disponíveis apenas para retrocompatibilidade, para evitar que consultas antigas sejam interrompidas por atualizações de algoritmos. A versão mais recente deve sempre dar os melhores resultados. Os valores válidos são "1.3", “1.2”, "1.1" ou nulo.
-   `StartPage` : Especifica a primeira página no intervalo de páginas a examinar. Predefinição: 1.
-   `EndPage` : Especifica a última página no intervalo de páginas a examinar. Predefinição: a última página do documento.
-   `MultiPageTables` : Controla se as tabelas semelhantes em páginas consecutivas vão ser combinadas automaticamente numa única tabela. Predefinição: verdadeiro.
-   `EnforceBorderLines` : Controla se as linhas dos limites são sempre impostas como limites da célula (se for verdadeiro) ou simplesmente utilizadas como uma sugestão entre muitas para determinar os limites da célula (se for falso). Predefinição: falso.


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
