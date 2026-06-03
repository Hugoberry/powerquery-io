---
title: Html.Table
---

# Html.Table


Retourne une table contenant les résultats de l’exécution des sélecteurs CSS spécifiés par rapport au code HTML fourni.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Retourne un tableau contenant les résultats de l'exécution des sélecteurs CSS spécifiés sur le `html` fourni. Un paramètre d'enregistrement facultatif, `options`, peut être fourni pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `RowSelector`


## Examples

### Example #1
Retourne un tableau à partir d'un exemple de valeur de texte html.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2
Extrait tous les href d'un exemple de valeur texte html.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accessing data
