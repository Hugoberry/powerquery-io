---
title: Csv.Document
---

# Csv.Document


Retourne le contenu du document CSV en tant que table.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Renvoie le contenu du document CSV sous forme de tableau.

-   `columns` peut être nul, le nombre de colonnes, une liste de noms de colonnes, un type de table ou un enregistrement d'options.
-   `delimiter` peut être un caractère unique, une liste de caractères ou la valeur `""`, qui indique que les lignes doivent être divisées par des caractères d'espacement consécutifs. Par défaut : `","`.
-   Reportez-vous à `ExtraValues.Type` pour les valeurs prises en charge de `extraValues`.
-   `encoding` spécifie le type d'encodage du texte.

Si un enregistrement est spécifié pour `columns` (et `delimiter`, `extraValues`, et `encoding` sont nuls), les champs d'enregistrement suivants peuvent être fournis :

-   `Délimiteur` : un délimiteur de colonne à caractère unique. Par défaut : `","`.
-   `Colonnes` : Peut être nul, le nombre de colonnes, une liste de noms de colonnes ou un type de table. Si le nombre de colonnes est inférieur au nombre trouvé dans l'entrée, les colonnes supplémentaires seront ignorées. Si le nombre de colonnes est supérieur au nombre trouvé dans l'entrée, les colonnes supplémentaires seront nulles. Si non spécifié, le nombre de colonnes sera déterminé par ce qui est trouvé dans l'entrée.
-   `Encodage` : L'encodage du texte du fichier. Par défaut : 65001 (UTF-8).
-   `CsvStyle` : spécifie comment les guillemets sont gérés.
    
    -   `CsvStyle.QuoteAfterDelimiter` (par défaut) : les guillemets dans un champ ne sont significatifs qu'immédiatement après le délimiteur.
    -   `CsvStyle.QuoteAlways : les guillemets dans un champ sont toujours significatifs, quel que soit l'endroit où ils apparaissent.`
    
````` -   ``QuoteStyle : spécifie comment les sauts de ligne entre guillemets sont gérés.  -   `QuoteStyle.Csv` (par défaut) : les sauts de ligne entre guillemets sont traités comme faisant partie des données et non comme la fin de la ligne actuelle. -   `QuoteStyle.None : tous les sauts de ligne sont traités comme la fin de la ligne actuelle, même lorsqu'ils se produisent à l'intérieur d'une valeur entre guillemets.`  `` ```` ``` -   ``IncludeByteOrderMark : une valeur logique indiquant s'il faut inclure une marque d'ordre d'octet (BOM) au début de la sortie CSV. Lorsqu'il est défini sur true, le BOM est écrit (par exemple, UTF-8 BOM : `0xEF 0xBB 0xBF`) ; lorsqu'il est défini sur false, aucun BOM n'est inclus. Cette option n'est applicable que dans les scénarios de sortie. La valeur par défaut est `false`.`` ``-   `ExtraValues` : consultez `ExtraValues.Type` pour connaître les valeurs prises en charge d'ExtraValues.`` ``` ```` `````


## Examples

### Example #1
Traiter le texte CSV avec des en-têtes de colonnes.
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
