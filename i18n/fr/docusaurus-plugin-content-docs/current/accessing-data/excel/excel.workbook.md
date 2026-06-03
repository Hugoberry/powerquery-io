---
title: Excel.Workbook
---

# Excel.Workbook


Retourne le contenu du classeur Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Retourne le contenu du classeur Excel.

-   `useHeaders` peut être null, une valeur logique (true/false) qui indique si la première ligne de chaque table retournée doit être traitée comme un en-tête ou un enregistrement options. Valeur par défaut : false.
-   `delayTypes` peut être null ou une valeur logique (true/false) qui indique si les colonnes de chaque table retournée doivent rester non typées. Valeur par défaut : false.

Si un enregistrement est spécifié pour `useHeaders` (et si `delayTypes` a la valeur null), les champs d’enregistrement suivants peuvent être fournis :

-   `UseHeaders` : peut être null ou une valeur logique (true/false) qui indique si la première ligne de chaque table retournée doit être traitée comme un en-tête. Valeur par défaut : false.
-   `DelayTypes` : peut être null ou une valeur logique (true/false) qui indique si les colonnes de chaque table retournée doivent rester non typées. Valeur par défaut : false.
-   `InferSheetDimensions` : peut être null ou une valeur logique (true/false) qui indique si la zone d’une feuille de calcul qui contient des données doit être déduite par la lecture de la feuille de calcul, plutôt que par la lecture des métadonnées de dimensions à partir du fichier. Cela peut être utile lorsque les métadonnées de dimensions sont incorrectes. Notez que cette option est uniquement prise en charge pour les fichiers Excel Open XML, et non pour les fichiers Excel hérités. Valeur par défaut : false.


## Examples

### Example #1
Retourner le contenu de la feuille Sheet1 à partir d’un classeur Excel
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
