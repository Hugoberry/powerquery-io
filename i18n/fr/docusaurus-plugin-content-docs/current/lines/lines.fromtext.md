---
title: Lines.FromText
---

# Lines.FromText


Convertit une valeur de texte en une liste de valeurs de texte fractionnées au niveau des sauts de lignes. Si includeLineSeparators a la valeur true, les caractères de saut de ligne sont inclus dans le texte.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Convertit une valeur de texte en liste de valeurs de texte fractionnées aux sauts de ligne.

-   `text` : Valeur de texte à convertir en liste de valeurs de texte.
-   `quoteStyle` : spécifie comment les sauts de ligne sont gérés. La valeur de `quoteStyle` peut être `null`. La valeur par défaut est `QuoteStyle.None`.
-   `includeLineSeparators` : spécifie s’il faut inclure les caractères de saut de ligne dans le texte. La valeur de `includeLineSeparators` peut être `null`. La valeur par défaut est `false`.

Si un enregistrement est spécifié pour `quoteStyle` (et que `includeLineSeparators` est `null`), les champs d’enregistrement suivants peuvent être fournis :

-   `QuoteStyle` : spécifie le mode de gestion des sauts de ligne entre guillemets.
    -   `QuoteStyle.Csv` : Les sauts de ligne entre guillemets sont traités comme faisant partie des données, et non comme la fin de la ligne actuelle.
    -   `QuoteStyle.None` : tous les sauts de ligne sont traités comme la fin de la ligne actuelle, même lorsqu'ils se produisent à l'intérieur d'une valeur entre guillemets. Cette valeur est la valeur par défaut si l’option `CsvStyle` n’est pas spécifiée.
-   `CsvStyle` : spécifie comment les guillemets sont traités. Ne doit pas être utilisé avec `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter` : dans un champ, les guillemets sont significatifs uniquement s’ils suivent immédiatement le `Delimiter`.
    -   `CsvStyle.QuoteAlways` : les guillemets dans un champ sont toujours significatifs, quel que soit l'emplacement où ils apparaissent.
-   `Delimiter` : délimiteur à caractère unique. Doit être utilisé uniquement avec `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators` : spécifie s’il faut inclure les caractères de saut de ligne dans le texte. La valeur par défaut est `false`.



## Category
Lines
