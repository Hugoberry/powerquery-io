---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Restituisce il contenuto della cartella di lavoro di Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Restituisce il contenuto della cartella di lavoro di Excel.    <ul>     <li> <code>useHeaders</code> può essere Null, un valore logico (true/false) che indica se la prima riga di ogni tabella restituita deve essere considerata come intestazione o come record di opzioni. Valore predefinito: false.</li>     <li> <code>delayTypes</code> può essere Null o un valore logico (true/false) che indica se le colonne di ogni tabella restituita devono essere lasciate non tipizzate. Valore predefinito: false.</li>    </ul>    Se è specificato un record per <code>useHeaders</code> (e <code>delayTypes</code> è Null), è possibile specificare i campi dei record seguenti:    <ul>     <li> <code>UseHeaders</code>: può essere Null o un valore logico (true/false) che indica se la prima riga di ogni tabella restituita deve essere considerata come intestazione. Valore predefinito: false.</li>     <li> <code>DelayTypes</code>: può essere Null o un valore logico (true/false) che indica se le colonne di ogni tabella restituita devono essere lasciate non tipizzate. Valore predefinito: false.</li>     <li> <code>InferSheetDimensions</code>: può essere Null o un valore logico (true/false) che indica se l'area di un foglio di lavoro che contiene dati deve essere dedotta tramite la lettura del foglio di lavoro stesso, anziché tramite la lettura dei metadati delle dimensioni dal file. Questa opzione può essere utile nei casi in cui i metadati delle dimensioni non sono corretti. Si noti che questa opzione è supportata solo per i file di Excel Open XML, non per i file di Excel legacy. Valore predefinito: false.</li>    </ul>


## Examples

### Example #1 
Restituisce il contenuto di Sheet1 da una cartella di lavoro di Excel.
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
