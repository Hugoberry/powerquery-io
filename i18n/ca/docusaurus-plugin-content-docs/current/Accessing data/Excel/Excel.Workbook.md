---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Retorna el contingut del llibre de l&#39;Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Retorna el contingut del llibre de l'Excel.    <ul>     <li> El valor <code>useHeaders</code> pot ser nul, un valor lògic ("true" o "false") que indiqui si la primera fila de cada taula retornada s'ha de tractar com a capçalera, o un registre d'opcions. El valor per defecte és "false".</li>     <li> El valor <code>delayTypes</code> pot ser nul o un valor lògic ("true" o "false") que indiqui si les columnes de cada taula retornada s'han de deixar sense cap tipus. El valor per defecte és "false".</li>    </ul>    Si s'especifica un registre per al valor <code>useHeaders</code> (i el valor <code>delayTypes</code> és nul), es poden proporcionar els camps de registre següents:    <ul>     <li> <code>UseHeaders</code>: pot ser un valor nul o lògic ("true" o "false") que indiqui si la primera fila de cada taula retornada s'ha de tractar com a capçalera. El valor per defecte és "false".</li>     <li> <code>DelayTypes</code>: pot ser un valor nul o lògic ("true" o "false") que indiqui si les columnes de cada taula retornada s'han de deixar sense cap tipus. El valor per defecte és "false".</li>     <li> <code>InferSheetDimensions</code>: pot ser un valor nul o lògic ("true" o "false") que indiqui si l'àrea d'un full de càlcul que conté dades s'ha d'inferir mitjançant la lectura del full de càlcul, en comptes de llegir les metadades de dimensions del fitxer. Pot resultar útil en aquells casos en què les metadades de dimensions siguin incorrectes. Tingueu en compte que aquesta opció només s'admet per als fitxers Open XML de l'Excel i no per als fitxers del llegat de l'Excel. El valor per defecte és "false".</li>    </ul>    


## Examples

### Example #1 
Retorna el contingut del Full1 d&#39;un llibre de treball de l&#39;Excel.
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
