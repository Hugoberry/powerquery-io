---
title: Lines.FromBinary
---

# Lines.FromBinary


Convertit une valeur binaire en une liste de valeurs de texte fractionnées au niveau des sauts de lignes. Si un style de guillemets est spécifié, les sauts de ligne peuvent apparaître entre guillemets. Si includeLineSeparators a la valeur true, les caractères de saut de ligne sont inclus dans le texte.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as any,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

Convertit une valeur binaire en liste de valeurs de texte fractionnées aux sauts de ligne.

-   `binary` : valeur binaire à convertir en liste.
-   `quoteStyle` : spécifie comment les sauts de ligne sont gérés. La valeur de `quoteStyle` peut être `null`. La valeur par défaut est `QuoteStyle.None`.
-   `includeLineSeparators` : spécifie s’il faut inclure les caractères de saut de ligne dans le texte. La valeur de `includeLineSeparators` peut être `null`. La valeur par défaut est `false`.
-   `encoding` : spécifie l’encodage de texte de la valeur binaire. La valeur de `encoding` peut être `null`. La valeur par défaut est `65001` (UTF-8).

Si un enregistrement est spécifié pour `quoteStyle` (et que `includeLineSeparators` et `encoding` sont `null`), les champs d’enregistrement suivants peuvent être fournis :

-   `QuoteStyle` : spécifie le mode de gestion des sauts de ligne entre guillemets.
    -   `QuoteStyle.Csv` : Les sauts de ligne entre guillemets sont traités comme faisant partie des données, et non comme la fin de la ligne actuelle.
    -   `QuoteStyle.None` : tous les sauts de ligne sont traités comme la fin de la ligne actuelle, même lorsqu'ils se produisent à l'intérieur d'une valeur entre guillemets. Cette valeur est la valeur par défaut si l’option `CsvStyle` n’est pas spécifiée.
-   `CsvStyle` : spécifie comment les guillemets sont traités. Ne doit pas être utilisé avec `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter` (par défaut) : dans un champ, les guillemets sont significatifs uniquement s’ils suivent immédiatement le `délimiteur`.
    -   `CsvStyle.QuoteAlways` : les guillemets dans un champ sont toujours significatifs, quel que soit l'emplacement où ils apparaissent.
-   `Delimiter` : délimiteur à caractère unique. Doit être utilisé uniquement avec `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators` : spécifie s’il faut inclure les caractères de saut de ligne dans le texte. La valeur par défaut est `false`.
-   `Encoding` : encodage de texte de la valeur binaire. La valeur par défaut est `65001` (UTF-8).



## Category
Lines
