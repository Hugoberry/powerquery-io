---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Retorna o conteúdo da pasta de trabalho do Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Retorna o conteúdo da pasta de trabalho do Excel.    <ul>     <li> O <code>useHeaders</code> pode ser nulo, um valor lógico (true/false) que indica se a primeira linha de cada tabela retornada deve ser tratada como um cabeçalho ou um registro de opções.  Padrão: false.</li>     <li> O <code>delayTypes</code> pode ser nulo ou um valor lógico (true/false) que indica se as colunas de cada tabela retornada devem ser deixadas sem tipo. Padrão: false.</li>    </ul>    Se um registro é especificado para <code>useHeaders</code> (e <code>delayTypes</code> é nulo), os seguintes campos de registro podem ser fornecidos:    <ul>     <li> <code>UseHeaders</code>: pode ser nulo ou um valor lógico (true/false) que indica se a primeira linha de cada tabela retornada deve ser tratada como um cabeçalho. Padrão: false.</li>     <li> <code>DelayTypes</code>: pode ser nulo ou um valor lógico (true/false) que indica se as colunas de cada tabela retornada devem ser deixadas sem tipo. Padrão: false.</li>     <li> <code>InferSheetDimensions</code>: pode ser nulo ou um valor lógico (true/false) que indica se a área de uma planilha que contém dados deve ser inferida pela leitura da própria planilha, em vez da leitura dos metadados de dimensões do arquivo. Isso pode ser útil em casos em que os metadados de dimensões estão incorretos. Observe que essa opção só tem suporte para arquivos Open XML do Excel, não para arquivos herdados do Excel. Padrão: false.</li>    </ul>    


## Examples

### Example #1 
Retornar o conteúdo de Sheet1 de uma pasta de trabalho do Excel.
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
