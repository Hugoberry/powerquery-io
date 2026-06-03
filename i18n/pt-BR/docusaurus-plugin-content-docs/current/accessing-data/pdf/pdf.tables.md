---
title: Pdf.Tables
---

# Pdf.Tables


Retorna todas as tabelas encontradas em um arquivo PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Retorna tabelas encontradas em `pdf`. Um parâmetro de registro opcional, `options`, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:

-   `Implementation` : A versão do algoritmo a ser usada ao identificar tabelas. As versões antigas estão disponíveis apenas para compatibilidade com versões anteriores, para evitar que consultas antigas sejam quebradas por atualizações de algoritmo. A versão mais recente sempre deve fornecer os melhores resultados. Os valores válidos são "1,3", "1,2", "1,1" ou nulo.
-   `StartPage` : Especifica a primeira página no intervalo de páginas a ser analisado. Padrão: 1.
-   `EndPage` : Especifica a última página no intervalo de páginas a ser analisado. Padrão: a última página do documento.
-   `MultiPageTables` : Controla se tabelas semelhantes em páginas consecutivas serão automaticamente combinadas em uma única tabela. Padrão: true.
-   `EnforceBorderLines` : Controla se linhas de borda são sempre impostas como limites da célula (quando for true) ou simplesmente usadas como uma dica dentre muitas para determinar os limites da célula (quando for false). Padrão: false.


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
