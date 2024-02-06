---
title: Excel.Workbook
---

# Excel.Workbook


Devolve o conteúdo do livro Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Devolve os conteúdos do livro Excel.    <ul>     <li> <code>useHeaders</code> pode ser nulo, um valor lógico (verdadeiro/falso) que indica se a primeira linha de cada tabela devolvida deve ser tratada como cabeçalho, ou um registo de opções. Predefinição: falso.</li>     <li> <code>delayTypes</code> pode ser nulo ou lógico um valor (verdadeiro/falso) que indica se as colunas de cada tabela devolvida devem ser deixadas sem tipo. Predefinição: falso.</li>    </ul>    Se for especificado um registo para <code>useHeaders</code> (e <code>delayTypes</code> for nulo), podem ser fornecidos os seguintes campos de registo:    <ul>     <li> <code>UseHeaders</code>: Pode ser nulo ou lógico um valor (verdadeiro/falso) que indica se a primeira linha de cada tabela devolvida deve ser tratada como cabeçalho. Predefinição: falso.</li>     <li> <code>DelayTypes</code>: pode ser nulo ou lógico um valor (verdadeiro/falso) que indica se as colunas de cada tabela devolvida devem ser deixadas sem tipo. Predefinição: falso.</li>     <li> <code>InferSheetDimensions</code>: pode ser nulo ou lógico um valor (verdadeiro/falso) que indica se a área de uma folha de cálculo que contenha dados deve ser inferida ao ler a própria folha de cálculo, em vez de ao ler os metadados de dimensões do ficheiro. Pode ser útil nos casos em que os metadados de dimensões estão incorretos. Tenha em atenção que esta opção só é suportada para ficheiros Excel Open XML e não para ficheiros Excel legados. Predefinição: falso.</li>    </ul>    


## Examples

### Example #1 
Devolve os conteúdos da Folha1 a partir de um livro do Excel.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
