---
title: Excel.Workbook
---

# Excel.Workbook


Retorna el contingut del llibre de l'Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Retorna el contingut del llibre de l'Excel.

-   El valor `useHeaders` pot ser nul, un valor lògic ("true" o "false") que indiqui si la primera fila de cada taula retornada s'ha de tractar com a capçalera, o un registre d'opcions. El valor per defecte és "false".
-   El valor `delayTypes` pot ser nul o un valor lògic ("true" o "false") que indiqui si les columnes de cada taula retornada s'han de deixar sense cap tipus. El valor per defecte és "false".

Si s'especifica un registre per al valor `useHeaders` (i el valor `delayTypes` és nul), es poden proporcionar els camps de registre següents:

-   `UseHeaders`: pot ser un valor nul o lògic ("true" o "false") que indiqui si la primera fila de cada taula retornada s'ha de tractar com a capçalera. El valor per defecte és "false".
-   `DelayTypes`: pot ser un valor nul o lògic ("true" o "false") que indiqui si les columnes de cada taula retornada s'han de deixar sense cap tipus. El valor per defecte és "false".
-   `InferSheetDimensions`: pot ser un valor nul o lògic ("true" o "false") que indiqui si l'àrea d'un full de càlcul que conté dades s'ha d'inferir mitjançant la lectura del full de càlcul, en comptes de llegir les metadades de dimensions del fitxer. Pot resultar útil en aquells casos en què les metadades de dimensions siguin incorrectes. Tingueu en compte que aquesta opció només s'admet per als fitxers Open XML de l'Excel i no per als fitxers del llegat de l'Excel. El valor per defecte és "false".


## Examples

### Example #1
Retorna el contingut del Full1 d'un llibre de treball de l'Excel.
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
