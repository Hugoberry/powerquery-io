---
title: Excel.Workbook
---

# Excel.Workbook


Devuelve el contenido del libro de Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Devuelve el contenido del libro de Excel.    <ul>     <li> <code>useHeaders</code> puede ser NULL, un valor lógico ("true" o "false") que indique si la primera fila de cada tabla devuelta debe tratarse como un encabezado o como un registro de opciones. El valor predeterminado es "false".</li>     <li> <code>delayTypes</code> puede ser NULL o un valor lógico ("true" o "false") que indique si las columnas de cada tabla devuelta deben dejarse sin tipo. El valor predeterminado es "false".</li>    </ul>    Si se especifica un registro para <code>useHeaders</code> (y <code>delayTypes</code> es NULL), se pueden proporcionar los siguientes campos de registro:    <ul>     <li> <code>UseHeaders</code>: puede ser NULL o un valor lógico ("true" o "false") que indique si la primera fila de cada tabla devuelta se debe tratar como encabezado. El valor predeterminado es "false".</li>     <li> <code>DelayTypes</code>: puede ser NULL o un valor lógico ("true" o "false") que indique si las columnas de cada tabla devuelta deben dejarse sin tipo. El valor predeterminado es "false".</li>     <li> <code>InferSheetDimensions</code>: puede ser NULL o un valor lógico ("true" o "false") que indique si el área de una hoja de cálculo que contiene datos se debe inferir leyendo la propia hoja de cálculo, en lugar de leer los metadatos de dimensión del archivo. Esto puede ser útil en los casos en los que los metadatos de dimensión no son correctos. Tenga en cuenta que esta opción solo se admite para archivos OpenXML de Excel, no para archivos heredados de Excel. El valor predeterminado es "false".</li>    </ul>    


## Examples

### Example #1 
Devuelve el contenido de Sheet1 desde un libro de Excel.
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
