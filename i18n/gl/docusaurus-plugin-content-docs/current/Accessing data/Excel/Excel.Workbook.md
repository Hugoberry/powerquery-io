---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Devolve o contido do libro de Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Devolve o contido do libro de Excel.    <ul>     <li> <code>useHeaders</code> pode ser nulo, un valor lóxico (verdadeiro/falso) que indica se a primeira fila de cada táboa devolta se debe tratar como unha cabeceira ou un rexistro de opcións. Valor predefinido: falso.</li>     <li> <code>delayTypes</code> pode ser nulo ou un valor lóxico (verdadeiro/falso) que indica se as columnas de cada táboa devolta se deben deixar sen tipo. Valor predefinido: falso.</li>    </ul>    Se se especificou un rexistro para <code>useHeaders</code> (e <code>delayTypes</code> é nulo), poden fornecerse os seguintes campos do rexistro:    <ul>     <li> <code>UseHeaders</code>: pode ser nulo ou un valor lóxico (verdadeiro/falso) que indica se a primeira fila de cada táboa devolta se debe tratar como unha cabeceira. Valor predefinido: falso.</li>     <li> <code>DelayTypes</code>: pode ser nulo ou un valor lóxico (verdadeiro/falso) que indica se as columnas de cada táboa devolta se deben deixar sen tipo. Valor predefinido: falso.</li>     <li> <code>InferSheetDimensions</code>: pode ser nulo ou un valor lóxico (verdadeiro/falso) que indica se a área dunha folla de cálculo que conteña datos se debe deducir mediante a lectura da propia folla de cálculo en lugar da lectura dos metadatos de dimensión do ficheiro. Isto pode resultar útil en casos nos que os metadatos de dimensión son incorrectos. Teña en conta que esta opción só se admite para ficheiros XML abertos de Excel, non para ficheiros de Excel herdados. Valor predefinido: falso.</li>    </ul>    


## Examples

### Example #1 
Devolve os contidos de Folla1 dun libro de Excel.
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
