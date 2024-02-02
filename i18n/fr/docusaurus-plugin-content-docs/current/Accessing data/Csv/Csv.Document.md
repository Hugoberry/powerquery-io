---
title: Csv.Document
---

# Csv.Document


## Description

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


## Details

Renvoie le contenu du document CSV sous forme de tableau.    <ul>      <li>        <code>columns</code> peut être null, le nombre de colonnes, une liste de noms de colonnes, un type de table ou un enregistrement d'options.      </li>      <li>        <code>delimiter</code> peut être un seul caractère, une liste de caractères ou la valeur <code>""</code>, qui indique que les lignes doivent être séparées par des caractères d'espacement consécutifs. Défaut : <code>","</code>.      </li>      <li>         Faire référence à <code>ExtraValues.Type</code> pour les valeurs prises en charge de <code>extraValues</code>.      </li>      <li>        <code>encoding</code> spécifie le type d'encodage du texte.      </li>    </ul>    Si un enregistrement est spécifié pour <code>columns</code> (et <code>delimiter</code>, <code>extraValues</code>, et <code>encoding</code> sont nuls), les champs d'enregistrement suivants peuvent être fournis :    <ul>      <li>        <code>Délimiteur</code> : Le délimiteur de colonne. Défaut : <code>","</code>.      </li>      <li>        <code>Colonnes</code> : Peut être null, le nombre de colonnes, une liste de noms de colonnes ou un type de table. Si le nombre de colonnes est inférieur au nombre trouvé dans l'entrée, les colonnes supplémentaires seront ignorées. Si le nombre de colonnes est supérieur au nombre trouvé dans l'entrée, les colonnes supplémentaires seront nulles. Lorsqu'il n'est pas spécifié, le nombre de colonnes sera déterminé par ce qui se trouve dans l'entrée      </li>      <li>        <code>Encodage</code> : L'encodage du texte du fichier. Défaut : 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code> : Spécifie comment les devis sont traités.         <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (default) : Les guillemets dans un champ ne sont significatifs qu'immédiatement après le délimiteur.          </li>          <li>            <code>CsvStyle.QuoteAlways</code> : Les guillemets dans un champ sont toujours significatifs, quel que soit l'endroit où ils apparaissent.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code> : Spécifie comment les sauts de ligne entre guillemets sont gérés.        <ul>          <li>            <code>QuoteStyle.Csv</code> : Les sauts de ligne entre guillemets sont traités comme faisant partie des données, et non comme la fin de la ligne actuelle.          </li>          <li>            <code>QuoteStyle.None</code> (default) : Tous les sauts de ligne sont traités comme la fin de la ligne actuelle, même lorsqu'ils se produisent à l'intérieur d'une valeur entre guillemets.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Traiter le texte CSV avec des en-têtes de colonnes
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




## Category
Accessing data
